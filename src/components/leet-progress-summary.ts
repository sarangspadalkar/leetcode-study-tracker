import {css, defineElement, html} from 'element-vir';
import {ViraProgress} from 'vira';

export const LeetProgressSummary = defineElement<{
    totalProblems: number;
    solvedCount: number;
}>()({
    tagName: 'leet-progress-summary',
    styles: css`
        :host {
            display: block;
            margin-bottom: 24px;
        }

        .stats {
            font-size: 15px;
            color: var(--leet-text-muted);
            margin-bottom: 8px;
            font-weight: 500;
        }

        vira-progress {
            width: 100%;
            height: 10px;
            border-radius: var(--leet-radius-sm);
            overflow: hidden;
        }
    `,
    render({inputs}) {
        const {totalProblems, solvedCount} = inputs;
        const pct = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;
        return html`
            <div class="stats">${solvedCount}/${totalProblems} solved (${pct}%)</div>
            <${ViraProgress.assign({value: pct, max: 100})}></${ViraProgress}>
        `;
    },
});
