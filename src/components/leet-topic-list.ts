import {css, defineElement, html} from 'element-vir';
import type {Problem, ProblemProgress, Topic} from '../types/index.js';
import {LeetTopic} from './leet-topic.js';

export const LeetTopicList = defineElement<{
    topics: Topic[];
    problems: Record<string, Problem>;
    progress: Record<string, ProblemProgress>;
}>()({
    tagName: 'leet-topic-list',
    styles: css`
        :host {
            display: block;
        }
    `,
    render({inputs}) {
        const {topics, problems, progress} = inputs;
        return html`
            ${topics.map(
                (topic: Topic) => html`
                    <${LeetTopic.assign({
                        topic,
                        problems,
                        progress,
                    })}></${LeetTopic}>
                `,
            )}
        `;
    },
});
