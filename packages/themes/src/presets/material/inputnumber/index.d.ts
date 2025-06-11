import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { InputNumberTokenSections } from '@peacepieceuix-compatibility/themes/types/inputnumber';

export * from '@peacepieceuix-compatibility/themes/types/inputnumber';

declare const root: InputNumberTokenSections.Root;
declare const button: InputNumberTokenSections.Button;
declare const colorScheme: InputNumberTokenSections.ColorScheme;
declare const css: InputNumberTokenSections.CSS;
declare const _default: {
    root: InputNumberTokenSections.Root;
    button: InputNumberTokenSections.Button;
    colorScheme: InputNumberTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { button, colorScheme, css, _default as default, root };
