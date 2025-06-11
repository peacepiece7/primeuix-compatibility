import type { KnobTokenSections } from '@peacepieceuix-compatibility/themes/types/knob';

export * from '@peacepieceuix-compatibility/themes/types/knob';

declare const root: KnobTokenSections.Root;
declare const value: KnobTokenSections.Value;
declare const range: KnobTokenSections.Range;
declare const text: KnobTokenSections.Text;
declare const _default: {
    root: KnobTokenSections.Root;
    value: KnobTokenSections.Value;
    range: KnobTokenSections.Range;
    text: KnobTokenSections.Text;
};

export { _default as default, range, root, text, value };
