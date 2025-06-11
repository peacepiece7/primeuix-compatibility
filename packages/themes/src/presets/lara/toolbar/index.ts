import type { ToolbarDesignTokens, ToolbarTokenSections } from '@peacepieceuix-compatibility/themes/types/toolbar';

export const root: ToolbarTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    color: '{content.color}',
    gap: '0.5rem',
    padding: '0.75rem'
};

export const colorScheme: ToolbarTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.50}',
            color: '{content.color}'
        }
    },
    dark: {
        root: {
            background: '{surface.800}',
            color: '{content.color}'
        }
    }
};

export default {
    root,
    colorScheme
} satisfies ToolbarDesignTokens;
