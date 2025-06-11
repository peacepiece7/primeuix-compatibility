import type { ImageTokenSections } from '@peacepieceuix-compatibility/themes/types/image';

export * from '@peacepieceuix-compatibility/themes/types/image';

declare const root: ImageTokenSections.Root;
declare const preview: ImageTokenSections.Preview;
declare const toolbar: ImageTokenSections.Toolbar;
declare const action: ImageTokenSections.Action;
declare const css: ImageTokenSections.CSS;
declare const _default: {
    root: ImageTokenSections.Root;
    preview: ImageTokenSections.Preview;
    toolbar: ImageTokenSections.Toolbar;
    action: ImageTokenSections.Action;
    css: string;
};

export { action, css, _default as default, preview, root, toolbar };
