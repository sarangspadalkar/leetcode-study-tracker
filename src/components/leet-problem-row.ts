import {css, defineElement, html} from 'element-vir';
import {createSizedIcon, featherIcons, ViraCheckbox, ViraIcon} from 'vira';
import {
    type Difficulty,
    type Problem,
    type ProblemProgress,
    Confidence,
    Difficulty as DifficultyEnum,
} from '../types/index.js';

const arrowUpRightIcon = createSizedIcon(featherIcons['arrow-up-right'], 16);

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

function confidenceLabel(c: Confidence | null): string {
    if (c === null) return '—';
    switch (c) {
        case Confidence.Low:
            return 'Low';
        case Confidence.Medium:
            return 'Med';
        case Confidence.High:
            return 'High';
        default:
            return '—';
    }
}

export const LeetProblemRow = defineElement<{
    problem: Problem;
    progress: ProblemProgress | undefined;
}>()({
    tagName: 'leet-problem-row',
    styles: css`
        :host {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }

        :host(:last-child) {
            border-bottom: none;
        }

        .title {
            flex: 1;
            font-weight: 500;
            color: #1a1a2e;
        }

        .badge {
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
        }

        .diff-easy {
            background: #d1e7dd;
            color: #0f5132;
        }

        .diff-medium {
            background: #fff3cd;
            color: #664d03;
        }

        .diff-hard {
            background: #f8d7da;
            color: #842029;
        }

        .confidence {
            font-size: 12px;
            color: #6c757d;
            min-width: 36px;
        }

        .link {
            color: #0d6efd;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .link:hover {
            text-decoration: underline;
        }

        .link-icon {
            width: 16px;
            height: 16px;
        }
    `,
    render({inputs}) {
        const {problem, progress} = inputs;
        const solved = progress?.solved ?? false;
        const confidence = progress?.confidence ?? null;
        return html`
            <${ViraCheckbox.assign({
                value: solved,
                disabled: true,
            })}></${ViraCheckbox}>
            <span class="title">${problem.title}</span>
            <span class="badge ${difficultyClass(problem.difficulty)}">${problem.difficulty}</span>
            <span class="confidence">${confidenceLabel(confidence)}</span>
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
