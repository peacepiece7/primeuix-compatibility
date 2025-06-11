import type { PopoverDesignTokens, PopoverTokenSections } from '@peacepieceuix-compatibility/themes/types/popover';

export const root: PopoverTokenSections.Root = {
    background: '{overlay.popover.background}',
    borderColor: '{overlay.popover.border.color}',
    color: '{overlay.popover.color}',
    borderRadius: '{overlay.popover.border.radius}',
    shadow: '{overlay.popover.shadow}',
    gutter: '10px',
    arrowOffset: '1.25rem'
};

export const content: PopoverTokenSections.Content = {
    padding: '{overlay.popover.padding}'
};

export const css: PopoverTokenSections.CSS = /*css*/ ``;

export default {
    root,
    content,
    css
} satisfies PopoverDesignTokens;
