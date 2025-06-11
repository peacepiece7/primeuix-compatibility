import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { SliderTokenSections } from '@peacepieceuix-compatibility/themes/types/slider';

export * from '@peacepieceuix-compatibility/themes/types/slider';

declare const root: SliderTokenSections.Root;
declare const track: SliderTokenSections.Track;
declare const range: SliderTokenSections.Range;
declare const handle: SliderTokenSections.Handle;
declare const css: SliderTokenSections.CSS;
declare const _default: {
    root: SliderTokenSections.Root;
    track: SliderTokenSections.Track;
    range: SliderTokenSections.Range;
    handle: SliderTokenSections.Handle;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, handle, range, root, track };
