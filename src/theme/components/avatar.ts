import { isDark, randomColor } from './../tools/colors';
import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  const { name, theme } = props;
  const bg = name ? randomColor({ string: name }) : 'gray.4';
  const color = name ? (isDark(bg)(theme) ? 'white' : 'gray.8') : 'white';
  const borderColor = mode('white', 'gray.8')(props);
  return {
    bg,
    color,
    borderColor,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    // verticalAlign: 'top',
  };
};

function getSize(size: any, fontSize: string) {
  return {
    width: size,
    height: size,
    fontSize: fontSize,
  };
}

const sizes = {
  '2xs': getSize('4', 'xs'),
  xs: getSize('6', 'sm'),
  sm: getSize('8', 'md'),
  md: getSize('12', 'lg'),
  lg: getSize('16', 'xl'),
  xl: getSize('24', '2xl'),
  '2xl': getSize('32', '3xl'),
  full: getSize('100%', '4xl'),
};

const defaultProps = {
  size: 'md',
};

export default {
  // parts,
  baseStyle,
  sizes,
  defaultProps,
};
