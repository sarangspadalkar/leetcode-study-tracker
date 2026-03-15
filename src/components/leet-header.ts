import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraButton} from 'vira';

export const LeetHeader = defineElement()({
    tagName: 'leet-header',
    events: {
        resetAllRequested: defineElementEvent<void>(),
    },
    styles: css`
        :host {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 0;
            border-bottom: 1px solid #dee2e6;
            margin-bottom: 16px;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            color: #1a1a2e;
        }
    `,
    render({dispatch, events}) {
        return html`
            <h1>LeetCode Study Tracker</h1>
            <${ViraButton.assign({text: 'Reset All'})}
                ${listen('click', () => dispatch(new events.resetAllRequested()))}
            ></${ViraButton}>
        `;
    },
});
