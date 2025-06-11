import type { ScrollPanelDesignTokens, ScrollPanelTokenSections } from '@peacepieceuix-compatibility/themes/types/scrollpanel';

export const root: ScrollPanelTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const bar: ScrollPanelTokenSections.Bar = {
    size: '9px',
    borderRadius: '{border.radius.sm}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme: ScrollPanelTokenSections.ColorScheme = {
    light: {
        bar: {
            background: '{surface.200}'
        }
    },
    dark: {
        bar: {
            background: '{surface.700}'
        }
    }
};

export const css: ScrollPanelTokenSections.CSS = /*css*/ ``;

export default {
    root,
    bar,
    colorScheme,
    css
} satisfies ScrollPanelDesignTokens;
