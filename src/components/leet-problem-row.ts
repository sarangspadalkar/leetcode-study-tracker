import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {createSizedIcon, featherIcons, ViraCheckbox, ViraIcon, ViraSelect} from 'vira';
import {
    type Difficulty,
    type Problem,
    type ProblemProgress,
    Confidence,
    Difficulty as DifficultyEnum,
} from '../types/index.js';

const arrowUpRightIcon = createSizedIcon(featherIcons['arrow-up-right'], 16);

const confidenceOptions = [
    {value: '', label: '—'},
    {value: Confidence.Low, label: 'Low'},
    {value: Confidence.Medium, label: 'Med'},
    {value: Confidence.High, label: 'High'},
];

function difficultyClass(d: Difficulty): string {
    switch (d) {
        case DifficultyEnum.Easy:
            return 'diff-easy';
        case DifficultyEnum.Medium:
            return 'diff-medium';
        case DifficultyEnum.Hard:
            return 'diff-hard';
        default:
            return '';
    }
}

export const LeetProblemRow = defineElement<{
    problem: Problem;
    progress: ProblemProgress | undefined;
}>()({
    tagName: 'leet-problem-row',
    events: {
        solvedChanged: defineElementEvent<{problemId: string; solved: boolean}>(),
        confidenceChanged: defineElementEvent<{problemId: string; confidence: Confidence | null}>(),
    },
    styles: css`
        :host {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--leet-border);
            font-size: 14px;
            transition: background 0.15s ease;
        }

        :host(:last-child) {
            border-bottom: none;
        }

        :host(:hover) {
            background: var(--leet-surface-hover);
        }

        :host(:focus-within) {
            background: var(--leet-surface-hover);
            outline: 2px solid var(--leet-focus-ring);
            outline-offset: -2px;
        }

        .title {
            flex: 1;
            font-weight: 500;
            color: var(--leet-text);
        }

        .badge {
            padding: 3px 8px;
            border-radius: var(--leet-radius-sm);
            font-size: 12px;
            font-weight: 600;
        }

        .diff-easy {
            background: var(--leet-easy-bg);
            color: var(--leet-easy-text);
        }

        .diff-medium {
            background: var(--leet-medium-bg);
            color: var(--leet-medium-text);
        }

        .diff-hard {
            background: var(--leet-hard-bg);
            color: var(--leet-hard-text);
        }

        .confidence-placeholder {
            font-size: 12px;
            color: var(--leet-text-subtle);
            min-width: 72px;
        }

        .confidence-wrap vira-select {
            width: 90px;
            max-width: 90px;
        }

        .confidence-pill {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            border-radius: var(--leet-radius-sm);
            font-size: 12px;
            font-weight: 500;
        }

        .confidence-pill.conf-low {
            background: var(--leet-conf-low-bg);
            color: var(--leet-conf-low-text);
        }

        .confidence-pill.conf-med {
            background: var(--leet-conf-med-bg);
            color: var(--leet-conf-med-text);
        }

        .confidence-pill.conf-high {
            background: var(--leet-conf-high-bg);
            color: var(--leet-conf-high-text);
        }

        .confidence-wrap {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .confidence-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .confidence-dot.conf-low {
            background: var(--leet-conf-low-text);
        }

        .confidence-dot.conf-medium {
            background: var(--leet-conf-med-text);
        }

        .confidence-dot.conf-high {
            background: var(--leet-conf-high-text);
        }

        .link {
            color: var(--leet-accent);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            padding: 4px;
            border-radius: var(--leet-radius-sm);
            transition:
                color 0.15s ease,
                background 0.15s ease;
        }

        .link:hover {
            color: var(--leet-accent-hover);
            background: var(--leet-surface-hover);
        }

        .link:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--leet-focus-ring);
        }

        .link-icon {
            width: 16px;
            height: 16px;
        }
    `,
    render({inputs, dispatch, events}) {
        const {problem, progress} = inputs;
        const solved = progress?.solved ?? false;
        const confidence = progress?.confidence ?? null;
        const confidenceDot =
            confidence === null
                ? ''
                : html`
                      <span class="confidence-dot conf-${confidence}" title=${confidence}></span>
                  `;
        return html`
            <${ViraCheckbox.assign({
                value: solved,
                disabled: false,
            })}
                ${listen(ViraCheckbox.events.valueChange, (event: CustomEvent<boolean>) => {
                    if (event.detail !== solved) {
                        dispatch(
                            new events.solvedChanged({problemId: problem.id, solved: event.detail}),
                        );
                    }
                })}
            ></${ViraCheckbox}>
            <span class="title">${problem.title}</span>
            <span class="badge ${difficultyClass(problem.difficulty)}">${problem.difficulty}</span>
            ${
                solved
                    ? html`
                          <span class="confidence-wrap">
                              ${confidenceDot}
                              <${ViraSelect.assign({
                                  options: confidenceOptions,
                                  value: confidence ?? '',
                              })}
                                  ${listen(
                                      ViraSelect.events.valueChange,
                                      (e: CustomEvent<string>) => {
                                          const v = e.detail;
                                          const conf = v === '' ? null : (v as Confidence);
                                          dispatch(
                                              new events.confidenceChanged({
                                                  problemId: problem.id,
                                                  confidence: conf,
                                              }),
                                          );
                                      },
                                  )}
                              ></${ViraSelect}>
                          </span>
                      `
                    : html`
                          <span class="confidence-placeholder">—</span>
                      `
            }
            <a
                class="link"
                href=${problem.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open on LeetCode"
            >
                <${ViraIcon.assign({icon: arrowUpRightIcon})} class="link-icon"></${ViraIcon}>
            </a>
        `;
    },
});
