import {css, defineElement, html, listen} from 'element-vir';
import {defaultAppData} from '../data/default-problems.js';
import {load, save} from '../services/storage.service.js';
import type {AppData, ProblemProgress} from '../types/index.js';
import {Confidence} from '../types/index.js';
import {LeetConfirmDialog} from './leet-confirm-dialog.js';
import {LeetHeader} from './leet-header.js';
import {LeetProblemRow} from './leet-problem-row.js';
import {LeetProgressSummary} from './leet-progress-summary.js';
import {LeetTopicList} from './leet-topic-list.js';
import {LeetTopic} from './leet-topic.js';

function getProgressCounts(data: AppData): {total: number; solved: number} {
    const ids = new Set<string>();
    for (const topic of data.topics) {
        for (const group of topic.groups) {
            for (const id of group.problemIds) ids.add(id);
        }
    }
    let solved = 0;
    for (const id of ids) {
        if (data.progress[id]?.solved) solved++;
    }
    return {total: ids.size, solved};
}

function updateProgress(
    data: AppData,
    problemId: string,
    update: Partial<Pick<ProblemProgress, 'solved' | 'confidence'>>,
): AppData {
    const now = new Date().toISOString();
    const existing = data.progress[problemId];
    const next: ProblemProgress = existing
        ? {...existing, ...update, lastUpdated: now}
        : {
              problemId,
              solved: update.solved ?? false,
              confidence: update.confidence ?? null,
              lastUpdated: now,
          };
    if (update.solved === false) next.confidence = null;
    return {
        ...data,
        progress: {...data.progress, [problemId]: next},
    };
}

function resetProgressForTopic(data: AppData, topicId: string): AppData {
    const topic = data.topics.find((t) => t.id === topicId);
    if (!topic) return data;
    const now = new Date().toISOString();
    const progress = {...data.progress};
    for (const group of topic.groups) {
        for (const problemId of group.problemIds) {
            const existing = progress[problemId];
            if (existing) {
                progress[problemId] = {
                    ...existing,
                    solved: false,
                    confidence: null,
                    lastUpdated: now,
                };
            }
        }
    }
    return {...data, progress};
}

function resetAllProgress(data: AppData): AppData {
    const now = new Date().toISOString();
    const progress: Record<string, ProblemProgress> = {};
    for (const id of Object.keys(data.progress)) {
        progress[id] = {
            problemId: id,
            solved: false,
            confidence: null,
            lastUpdated: now,
        };
    }
    return {...data, progress};
}

export const LeetApp = defineElement()({
    tagName: 'leet-app',
    state: () => ({
        appData: null as AppData | null,
        loadStarted: false,
        dialogOpen: false,
        dialogKind: null as 'reset-all' | 'reset-topic' | null,
        dialogTopicId: null as string | null,
    }),
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            font-family: var(--leet-font-sans);
            color: var(--leet-text);
            background: var(--leet-bg);
        }

        .container {
            max-width: 900px;
            width: 100%;
            padding: 32px 24px;
        }
    `,
    render({state, updateState}) {
        if (state.appData === null && !state.loadStarted) {
            updateState({loadStarted: true});
            load().then((data) => {
                updateState({appData: data ?? defaultAppData});
            });
        }
        if (state.appData === null) {
            return html`
                <div class="container"><p>Loading…</p></div>
            `;
        }
        const data = state.appData;
        const {total, solved} = getProgressCounts(data);
        let dialogTitle = '';
        let dialogMessage = '';
        if (state.dialogKind === 'reset-all') {
            dialogTitle = 'Reset all progress';
            dialogMessage =
                'Clear solved status and confidence for all problems? This cannot be undone.';
        } else if (state.dialogKind === 'reset-topic') {
            dialogTitle = 'Reset topic progress';
            dialogMessage =
                'Clear solved status and confidence for all problems in this topic? This cannot be undone.';
        }
        return html`
            <div
                class="container"
                ${listen(
                    LeetProblemRow.events.solvedChanged,
                    (e: CustomEvent<{problemId: string; solved: boolean}>) => {
                        const {problemId, solved: newSolved} = e.detail;
                        const next = updateProgress(data, problemId, {solved: newSolved});
                        updateState({appData: next});
                        save(next);
                    },
                )}
                ${listen(
                    LeetProblemRow.events.confidenceChanged,
                    (e: CustomEvent<{problemId: string; confidence: Confidence | null}>) => {
                        const {problemId, confidence} = e.detail;
                        const next = updateProgress(data, problemId, {confidence});
                        updateState({appData: next});
                        save(next);
                    },
                )}
                ${listen(
                    LeetTopic.events.resetTopicRequested,
                    (e: CustomEvent<{topicId: string}>) => {
                        updateState({
                            dialogOpen: true,
                            dialogKind: 'reset-topic',
                            dialogTopicId: e.detail.topicId,
                        });
                    },
                )}
            >
                <${LeetHeader}
                    ${listen(LeetHeader.events.resetAllRequested, () => {
                        updateState({
                            dialogOpen: true,
                            dialogKind: 'reset-all',
                            dialogTopicId: null,
                        });
                    })}
                ></${LeetHeader}>
                <${LeetProgressSummary.assign({
                    totalProblems: total,
                    solvedCount: solved,
                })}></${LeetProgressSummary}>
                <${LeetTopicList.assign({
                    topics: data.topics,
                    problems: data.problems,
                    progress: data.progress,
                })}></${LeetTopicList}>
                <${LeetConfirmDialog.assign({
                    open: state.dialogOpen,
                    dialogTitle,
                    dialogMessage,
                })}
                    ${listen(LeetConfirmDialog.events.confirmed, () => {
                        if (!state.appData) return;
                        let next = state.appData;
                        if (state.dialogKind === 'reset-all') {
                            next = resetAllProgress(state.appData);
                        } else if (state.dialogKind === 'reset-topic' && state.dialogTopicId) {
                            next = resetProgressForTopic(state.appData, state.dialogTopicId);
                        }
                        updateState({
                            appData: next,
                            dialogOpen: false,
                            dialogKind: null,
                            dialogTopicId: null,
                        });
                        save(next);
                    })}
                    ${listen(LeetConfirmDialog.events.cancelled, () => {
                        updateState({
                            dialogOpen: false,
                            dialogKind: null,
                            dialogTopicId: null,
                        });
                    })}
                ></${LeetConfirmDialog}>
            </div>
        `;
    },
});
