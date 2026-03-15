import { css, defineElement, defineElementEvent, html, listen } from 'element-vir';
import { ViraButton, ViraCollapsibleCard } from 'vira';
import type { PatternGroup, Problem, ProblemProgress, Topic } from '../types/index.js';
import { LeetPatternGroup } from './leet-pattern-group.js';

export const LeetTopic = defineElement<{
    topic: Topic;
    problems: Record<string, Problem>;
    progress: Record<string, ProblemProgress>;
}>()({
    tagName: 'leet-topic',
    events: {
        resetTopicRequested: defineElementEvent<void>(),
    },
    styles: css`
        :host {
            display: block;
            margin-bottom: 16px;
        }

        vira-collapsible-card {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .topic-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .topic-title {
            font-size: 17px;
            font-weight: 600;
            color: #1a1a2e;
        }
    `,
    render({ inputs, dispatch, events }) {
        const { topic, problems, progress } = inputs;
        return html`
            <${ViraCollapsibleCard.assign({ startExpanded: true })}
                ${listen(ViraCollapsibleCard.events.expandToggle, () => { })}
            >
                <div slot=${ViraCollapsibleCard.slotNames.header} class="topic-header">
                    <span class="topic-title">${topic.name}</span>
                    <${ViraButton.assign({ text: 'Reset Topic' })}
                        ${listen('click', (e: Event) => {
            e.stopPropagation();
            dispatch(new events.resetTopicRequested());
        })}
                    ></${ViraButton}>
                </div>
                ${topic.groups.map(
            (group: PatternGroup) => html`
                        <${LeetPatternGroup.assign({
                group,
                problems,
                progress,
            })}></${LeetPatternGroup}>
                    `,
        )}
            </${ViraCollapsibleCard}>
        `;
    },
});
