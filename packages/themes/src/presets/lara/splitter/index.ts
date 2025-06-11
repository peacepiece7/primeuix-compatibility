import type { SplitterDesignTokens, SplitterTokenSections } from '@peacepieceuix-compatibility/themes/types/splitter';

export const root: SplitterTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    transitionDuration: '{transition.duration}'
};

export const gutter: SplitterTokenSections.Gutter = {
    background: '{content.border.color}'
};

export const handle: SplitterTokenSections.Handle = {
    size: '24px',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme: SplitterTokenSections.ColorScheme = {
    light: {
        handle: {
            background: '{surface.400}'
        }
    },
    dark: {
        handle: {
            background: '{surface.600}'
        }
    }
};

export default {
    root,
    gutter,
    handle,
    colorScheme
} satisfies SplitterDesignTokens;
