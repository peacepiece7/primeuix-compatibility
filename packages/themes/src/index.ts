import * as Styled from '@peacepieceuix-compatibility/styled';
import type { PaletteDesignToken, Preset, Theme } from '@peacepieceuix-compatibility/themes/types';

export const definePreset = (...presets: Preset[]) => Styled.definePreset(...presets);
export const updatePreset = (...presets: Preset[]) => Styled.updatePreset(...presets);
export const updatePrimaryPalette = (palette?: PaletteDesignToken) => Styled.updatePrimaryPalette<PaletteDesignToken, Preset>(palette);
export const updateSurfacePalette = (palette?: PaletteDesignToken) => Styled.updateSurfacePalette<PaletteDesignToken, Preset>(palette);
export const usePreset = (...presets: Preset[]) => Styled.usePreset(...presets);
export const useTheme = (theme: Theme) => Styled.useTheme(theme);

export * from '@peacepieceuix-compatibility/styled';
