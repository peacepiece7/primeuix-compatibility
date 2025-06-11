import type { ToggleButtonDesignTokens, ToggleButtonTokenSections } from '@peacepieceuix-compatibility/themes/types/togglebutton';

export const root: ToggleButtonTokenSections.Root = {
    padding: '0.5rem 0.75rem',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem',
    fontWeight: '500',
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    color: '{form.field.color}',
    hoverColor: '{form.field.color}',
    checkedBackground: '{highlight.background}',
    checkedColor: '{highlight.color}',
    checkedBorderColor: '{form.field.border.color}',
    disabledBackground: '{form.field.disabled.background}',
    disabledBorderColor: '{form.field.disabled.background}',
    disabledColor: '{form.field.disabled.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        padding: '0.375rem 0.625rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        padding: '0.625rem 0.875rem'
    }
};

export const icon: ToggleButtonTokenSections.Icon = {
    color: '{text.muted.color}',
    hoverColor: '{text.muted.color}',
    checkedColor: '{highlight.color}',
    disabledColor: '{form.field.disabled.color}'
};

export const content: ToggleButtonTokenSections.Content = {
    checkedBackground: 'transparent',
    checkedShadow: 'none',
    padding: '0',
    borderRadius: '0',
    sm: {
        padding: '0'
    },
    lg: {
        padding: '0'
    }
};

export const colorScheme: ToggleButtonTokenSections.ColorScheme = {
    light: {
        root: {
            hoverBackground: '{surface.200}'
        }
    },
    dark: {
        root: {
            hoverBackground: '{surface.700}'
        }
    }
};

export default {
    root,
    icon,
    content,
    colorScheme
} satisfies ToggleButtonDesignTokens;
