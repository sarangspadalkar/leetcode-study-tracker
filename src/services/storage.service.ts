import localforage from 'localforage-esm';
import {checkValidShape, defineShape} from 'object-shape-tester';
import type {AppData} from '../types/index.js';

const STORAGE_KEY = 'leetcode-tracker:data';
const CURRENT_VERSION = 1;

const appDataShape = defineShape({
    version: 0,
    topics: [] as AppData['topics'],
    problems: {} as AppData['problems'],
    progress: {} as AppData['progress'],
});

export async function load(): Promise<AppData | null> {
    try {
        const raw = await localforage.getItem<unknown>(STORAGE_KEY);
        if (raw == null) return null;
        if (!checkValidShape(raw, appDataShape)) return null;
        const data = raw as AppData;
        if (data.version !== CURRENT_VERSION) return null;
        return data;
    } catch {
        return null;
    }
}

export async function save(data: AppData): Promise<void> {
    const payload: AppData = {...data, version: CURRENT_VERSION};
    await localforage.setItem(STORAGE_KEY, payload);
}

export async function clear(): Promise<void> {
    await localforage.removeItem(STORAGE_KEY);
}
