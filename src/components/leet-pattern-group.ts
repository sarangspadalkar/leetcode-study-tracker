import {css, defineElement, html} from 'element-vir';
import type {PatternGroup, Problem, ProblemProgress} from '../types/index.js';
import {LeetProblemRow} from './leet-problem-row.js';

export const LeetPatternGroup = defineElement<{
    group: PatternGroup;
    problems: Record<string, Problem>;
    progress: Record<string, ProblemProgress>;
}>()({
    tagName: 'leet-pattern-group',
    styles: css`
        :host {
            display: block;
            margin-bottom: 20px;
        }

        .group-name {
            font-size: 15px;
            font-weight: 600;
            color: #495057;
            margin-bottom: 8px;
            padding-bottom: 4px;
        }

        .rows {
            border: 1px solid #dee2e6;
            border-radius: 8px;
            background: #fff;
            overflow: hidden;
        }
    `,
    render({inputs}) {
        const {group, problems, progress} = inputs;
        const rows = group.problemIds
            .map((id) => {
                const problem = problems[id];
                if (!problem) return null;
                return html`
                    <${LeetProblemRow.assign({
                        problem,
                        progress: progress[id],
                    })}></${LeetProblemRow}>
                `;
            })
            .filter(Boolean);
        return html`
            <div class="group-name">${group.name}</div>
            <div class="rows">${rows}</div>
        `;
    },
});
