import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { ToggleSwitchTokenSections } from '@peacepieceuix-compatibility/themes/types/toggleswitch';

export * from '@peacepieceuix-compatibility/themes/types/toggleswitch';

declare const root: ToggleSwitchTokenSections.Root;
declare const handle: ToggleSwitchTokenSections.Handle;
declare const colorScheme: ToggleSwitchTokenSections.ColorScheme;
declare const css: ToggleSwitchTokenSections.CSS;
declare const _default: {
    root: ToggleSwitchTokenSections.Root;
    handle: ToggleSwitchTokenSections.Handle;
    colorScheme: ToggleSwitchTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { colorScheme, css, _default as default, handle, root };
