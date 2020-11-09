const baseStyle = (props: Record<string, any>) => {
  const activeColor = activeColorSetter(props);
  return {
    activeColor,
  };
};

const activeColorSetter = (props: Record<string, any>) => {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];

  if (isDisabled) return 'gray.3';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][4] ||
          theme.colors[simpleColorScheme][2];
  }
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
