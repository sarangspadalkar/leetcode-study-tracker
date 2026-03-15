import localforage from 'localforage-esm';
import type {AppData} from '../types/index.js';

const STORAGE_KEY = 'leetcode-tracker:data';
const CURRENT_VERSION = 1;

function isValidAppData(raw: unknown): raw is AppData {
    if (typeof raw !== 'object' || raw === null) return false;
    const obj = raw as Record<string, unknown>;
    if (typeof obj.version !== 'number') return false;
    if (!Array.isArray(obj.topics)) return false;
    if (typeof obj.problems !== 'object' || obj.problems === null) return false;
    if (typeof obj.progress !== 'object' || obj.progress === null) return false;
    return true;
}

export async function load(): Promise<AppData | null> {
    try {
        const raw = await localforage.getItem<unknown>(STORAGE_KEY);
        if (raw == null) return null;
        if (!isValidAppData(raw)) return null;
        if (raw.version !== CURRENT_VERSION) return null;
        return raw;
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
