import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraButton} from 'vira';

export const LeetConfirmDialog = defineElement<{
    open: boolean;
    dialogTitle: string;
    dialogMessage: string;
}>()({
    tagName: 'leet-confirm-dialog',
    events: {
        confirmed: defineElementEvent<void>(),
        cancelled: defineElementEvent<void>(),
    },
    styles: css`
        .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(28, 25, 23, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .dialog {
            background: var(--leet-surface);
            border-radius: var(--leet-radius-lg);
            padding: 24px;
            max-width: 400px;
            box-shadow: var(--leet-shadow-lg);
            border: 1px solid var(--leet-border);
        }

        .title {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 12px;
            color: var(--leet-text);
        }

        .message {
            font-size: 14px;
            color: var(--leet-text-muted);
            margin: 0 0 20px;
            line-height: 1.5;
        }

        .actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }
    `,
    render({inputs, dispatch, events}) {
        const {open, dialogTitle, dialogMessage} = inputs;
        if (!open) return html``;
        return html`
            <div
                class="backdrop"
                ${listen('click', (e: MouseEvent) => {
                    if (e.target === e.currentTarget) dispatch(new events.cancelled());
                })}
            >
                <div class="dialog" ${listen('click', (e: Event) => e.stopPropagation())}>
                    <h2 class="title">${dialogTitle}</h2>
                    <p class="message">${dialogMessage}</p>
                    <div class="actions">
                        <${ViraButton.assign({text: 'Cancel'})}
                            ${listen('click', () => dispatch(new events.cancelled()))}
                        ></${ViraButton}>
                        <${ViraButton.assign({text: 'Confirm'})}
                            ${listen('click', () => dispatch(new events.confirmed()))}
                        ></${ViraButton}>
                    </div>
                </div>
            </div>
        `;
    },
});
