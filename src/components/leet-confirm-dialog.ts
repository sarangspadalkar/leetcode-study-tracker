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
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .dialog {
            background: #fff;
            border-radius: 8px;
            padding: 24px;
            max-width: 400px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .title {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 12px;
            color: #1a1a2e;
        }

        .message {
            font-size: 14px;
            color: #495057;
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
