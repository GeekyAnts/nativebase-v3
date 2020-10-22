import colors from './colors';
import radii from './radius';
import sizes, { baseSizes } from './sizes';
import typography from './typography';
import borders from './borders';

const theme = {
  radii,
  colors,
  ...typography,
  sizes,
  space: baseSizes,
  borders,
};

export type ITheme = typeof theme;

export const themePropertyMap: any = {
  radius: 'radii',
  color: 'colors',
  letterSpacing: 'letterSpacings',
  lineHeight: 'lineHeights',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  size: 'sizes',
  space: 'space',
  border: 'borders',
};

export default theme;
