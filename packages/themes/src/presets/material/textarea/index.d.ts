import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { TextareaTokenSections } from '@peacepieceuix-compatibility/themes/types/textarea';

export * from '@peacepieceuix-compatibility/themes/types/textarea';

declare const root: TextareaTokenSections.Root;
declare const css: TextareaTokenSections.CSS;
declare const _default: {
    root: TextareaTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
