import { defaultAppData } from '../data/default-problems.js';
import { load } from '../services/storage.service.js';
import type { AppData } from '../types/index.js';
import { css, defineElement, html, listen } from 'element-vir';
import { LeetHeader } from './leet-header.js';
import { LeetProgressSummary } from './leet-progress-summary.js';
import { LeetTopicList } from './leet-topic-list.js';

function getProgressCounts(data: AppData): { total: number; solved: number } {
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
    return { total: ids.size, solved };
}

export const LeetApp = defineElement()({
    tagName: 'leet-app',
    state: () => ({
        appData: null as AppData | null,
        loadStarted: false,
    }),
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            font-family: system-ui, -apple-system, sans-serif;
            color: #1a1a2e;
            background: #f8f9fa;
        }

        .container {
            max-width: 900px;
            width: 100%;
            padding: 32px 24px;
        }
    `,
    render({ state, updateState }) {
        if (state.appData === null && !state.loadStarted) {
            updateState({ loadStarted: true });
            load().then((data) => {
                updateState({ appData: data ?? defaultAppData });
            });
        }
        if (state.appData === null) {
            return html`<div class="container"><p>Loading…</p></div>`;
        }
        const data = state.appData;
        const { total, solved } = getProgressCounts(data);
        return html`
            <div class="container">
                <${LeetHeader} ${listen(LeetHeader.events.resetAllRequested, () => { })}></${LeetHeader}>
                <${LeetProgressSummary.assign({
            totalProblems: total,
            solvedCount: solved,
        })}></${LeetProgressSummary}>
                <${LeetTopicList.assign({
            topics: data.topics,
            problems: data.problems,
            progress: data.progress,
        })}></${LeetTopicList}>
            </div>
        `;
    },
});
