import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { InputTextTokenSections } from '@peacepieceuix-compatibility/themes/types/inputtext';

export * from '@peacepieceuix-compatibility/themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
