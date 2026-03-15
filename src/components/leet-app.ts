import { defaultAppData } from '../data/default-problems.js';
import { load } from '../services/storage.service.js';
import type { AppData } from '../types/index.js';
import { css, defineElement, html } from 'element-vir';

export const LeetApp = defineElement()({
    tagName: 'leet-app',
    state: () => ({
        appData: null as AppData | null,
        loadStarted: false,
    }),
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            font-family: system-ui, -apple-system, sans-serif;
            color: #1a1a2e;
            background: #f8f9fa;
        }

        .container {
            max-width: 900px;
            width: 100%;
            padding: 32px 24px;
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 8px;
        }

        p {
            color: #6c757d;
            margin: 0;
        }
    `,
    render({ state, updateState }) {
        if (state.appData === null && !state.loadStarted) {
            updateState({ loadStarted: true });
            load().then((data) => {
                updateState({ appData: data ?? defaultAppData });
            });
        }
        if (state.appData === null) {
            return html`<div class="container"><p>Loading…</p></div>`;
        }
        const { topics } = state.appData;
        return html`
            <div class="container">
                <h1>LeetCode Study Tracker</h1>
                <p>Track your progress solving LeetCode problems by topic and pattern.</p>
                <p>${topics.length} topic(s) loaded.</p>
            </div>
        `;
    },
});
