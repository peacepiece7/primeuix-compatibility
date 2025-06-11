import type { StyleOptions } from '@peacepieceuix-compatibility/styled';
import type { FieldsetTokenSections } from '@peacepieceuix-compatibility/themes/types/fieldset';

export * from '@peacepieceuix-compatibility/themes/types/fieldset';

declare const root: FieldsetTokenSections.Root;
declare const legend: FieldsetTokenSections.Legend;
declare const toggleIcon: FieldsetTokenSections.ToggleIcon;
declare const content: FieldsetTokenSections.Content;
declare const css: FieldsetTokenSections.CSS;
declare const _default: {
    root: FieldsetTokenSections.Root;
    legend: FieldsetTokenSections.Legend;
    toggleIcon: FieldsetTokenSections.ToggleIcon;
    content: FieldsetTokenSections.Content;
    css: (options: StyleOptions) => string;
};

export { content, css, _default as default, legend, root, toggleIcon };
