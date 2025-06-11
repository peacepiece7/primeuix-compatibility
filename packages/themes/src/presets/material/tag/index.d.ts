import type { TagTokenSections } from '@peacepieceuix-compatibility/themes/types/tag';

export * from '@peacepieceuix-compatibility/themes/types/tag';

declare const root: TagTokenSections.Root;
declare const icon: TagTokenSections.Icon;
declare const colorScheme: TagTokenSections.ColorScheme;
declare const css: TagTokenSections.CSS;
declare const _default: {
    root: TagTokenSections.Root;
    icon: TagTokenSections.Icon;
    colorScheme: TagTokenSections.ColorScheme;
    css: string;
};

export { colorScheme, css, _default as default, icon, root };
