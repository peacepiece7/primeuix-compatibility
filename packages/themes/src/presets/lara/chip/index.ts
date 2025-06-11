import type { ChipDesignTokens, ChipTokenSections } from '@peacepieceuix-compatibility/themes/types/chip';

export const root: ChipTokenSections.Root = {
    borderRadius: '16px',
    paddingX: '0.875rem',
    paddingY: '0.625rem',
    gap: '0.5rem',
    transitionDuration: '{transition.duration}'
};

export const image: ChipTokenSections.Image = {
    width: '2rem',
    height: '2rem'
};

export const icon: ChipTokenSections.Icon = {
    size: '1rem'
};

export const removeIcon: ChipTokenSections.RemoveIcon = {
    size: '1rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme: ChipTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.100}',
            color: '{surface.800}'
        },
        icon: {
            color: '{surface.800}'
        },
        removeIcon: {
            color: '{surface.800}'
        }
    },
    dark: {
        root: {
            background: '{surface.800}',
            color: '{surface.0}'
        },
        icon: {
            color: '{surface.0}'
        },
        removeIcon: {
            color: '{surface.0}'
        }
    }
};

export default {
    root,
    image,
    icon,
    removeIcon,
    colorScheme
} satisfies ChipDesignTokens;
