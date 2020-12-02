import { getColorFormColorScheme } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeColor,
  };
};

const sizes = {
  lg: { thumbSize: '10px', sliderSize: '9px' },
  md: { thumbSize: '8px', sliderSize: '8px' },
  sm: { thumbSize: '6px', sliderSize: '7px' },
};

const defaultProps = {
  colorScheme: 'default',
  size: 'md',
  min: 0,
  max: 100,
  step: 1,
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};

// SliderThumb
const sliderThumbDefaultProps = {
  shadow: 2,
};
export const SliderThumb = {
  defaultProps: sliderThumbDefaultProps,
};
