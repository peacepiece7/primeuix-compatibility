import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { InputGroupTokenSections } from '@peacepieceuix-compatibility/themes/types/inputgroup';

export * from '@peacepieceuix-compatibility/themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
