import colors from './colors';
import radii from './radius';
import sizes, { baseSizes } from './sizes';
import typography from './typography';
import borders from './borders';

const space = baseSizes;

const theme = {
  radii,
  colors,
  ...typography,
  sizes,
  space,
  borders,
};

export type ITheme = typeof theme;

export default theme;
