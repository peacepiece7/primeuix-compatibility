import type { OverlayBadgeDesignTokens, OverlayBadgeTokenSections } from '@peacepieceuix-compatibility/themes/types/overlaybadge';

export const root: OverlayBadgeTokenSections.Root = {
    outline: {
        width: '2px',
        color: '{content.background}'
    }
};

export const css: OverlayBadgeTokenSections.CSS = /*css*/ ``;

export default {
    root,
    css
} satisfies OverlayBadgeDesignTokens;
