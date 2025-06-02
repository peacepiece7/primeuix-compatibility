import { deepMerge } from '@peacepieceuix-compatibility/utils/object';

export default function definePreset<T extends Record<string, unknown>>(...presets: T[]): T {
    return deepMerge(...presets) as T;
}
