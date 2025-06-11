import type { FloatLabelDesignTokens, FloatLabelTokenSections } from '@peacepieceuix-compatibility/themes/types/floatlabel';

export const root: FloatLabelTokenSections.Root = {
    color: '{form.field.float.label.color}',
    focusColor: '{form.field.float.label.focus.color}',
    activeColor: '{form.field.float.label.active.color}',
    invalidColor: '{form.field.float.label.invalid.color}',
    transitionDuration: '0.2s',
    positionX: '{form.field.padding.x}',
    positionY: '{form.field.padding.y}',
    fontWeight: '500',
    active: {
        fontSize: '0.75rem',
        fontWeight: '400'
    }
};

export const over: FloatLabelTokenSections.Over = {
    active: {
        top: '-1.25rem'
    }
};

export const inside: FloatLabelTokenSections.In = {
    input: {
        paddingTop: '1.5rem',
        paddingBottom: '0.5rem'
    },
    active: {
        top: '0.5rem'
    }
};

export const on: FloatLabelTokenSections.On = {
    borderRadius: '{border.radius.xs}',
    active: {
        background: '{form.field.background}',
        padding: '0 0.125rem'
    }
};

export const css: FloatLabelTokenSections.CSS = /*css*/ ``;

export default {
    root,
    over,
    in: inside,
    on,
    css
} satisfies FloatLabelDesignTokens;
