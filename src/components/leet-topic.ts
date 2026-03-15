import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraButton, ViraCollapsibleCard} from 'vira';
import type {PatternGroup, Problem, ProblemProgress, Topic} from '../types/index.js';
import {LeetPatternGroup} from './leet-pattern-group.js';

export const LeetTopic = defineElement<{
    topic: Topic;
    problems: Record<string, Problem>;
    progress: Record<string, ProblemProgress>;
}>()({
    tagName: 'leet-topic',
    events: {
        resetTopicRequested: defineElementEvent<{topicId: string}>(),
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
            border-radius: var(--leet-radius-md);
            box-shadow: var(--leet-shadow);
            overflow: hidden;
            border: 1px solid var(--leet-border);
            background: var(--leet-surface);
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
            color: var(--leet-text);
        }

        vira-button {
            --vira-button-secondary-border-color: var(--leet-border-strong);
            --vira-button-secondary-hover-background-color: var(--leet-surface-hover);
        }
    `,
    render({inputs, dispatch, events}) {
        const {topic, problems, progress} = inputs;
        return html`
            <${ViraCollapsibleCard.assign({startExpanded: true})}
                ${listen(ViraCollapsibleCard.events.expandToggle, () => {})}
            >
                <div slot=${ViraCollapsibleCard.slotNames.header} class="topic-header">
                    <span class="topic-title">${topic.name}</span>
                    <${ViraButton.assign({text: 'Reset Topic'})}
                        ${listen('click', (e: Event) => {
                            e.stopPropagation();
                            dispatch(new events.resetTopicRequested({topicId: topic.id}));
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
