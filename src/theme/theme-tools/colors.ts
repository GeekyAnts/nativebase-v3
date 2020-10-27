import { get } from 'lodash';
import Color from 'tinycolor2';
import type { Dict } from './utils';

export const transparentize = (color: string, opacity: number) => (
  theme: Dict
) => {
  const raw = getColor(theme, color);
  return Color(raw).setAlpha(opacity).toRgbString();
};

export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color);
  const isValid = Color(hex).isValid();
  return isValid ? hex : fallback;
};
