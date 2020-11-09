const baseStyle = (props: Record<string, any>) => {
  const activeColor = activeColorSetter(props);
  return {
    activeColor,
  };
};

const activeColorSetter = (props: Record<string, any>) => {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme
    ? colorScheme?.split('.')[0]
    : 'default';

  if (isDisabled) return 'gray.3';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][4] ||
          theme.colors[simpleColorScheme][2];
  }
};
const sizes = {
  lg: { thumbSize: 5, sliderSize: 3 },
  md: { thumbSize: 4, sliderSize: 2 },
  sm: { thumbSize: 3, sliderSize: 1 },
};

const defaultProps = {
  colorScheme: 'default',
  size: 'md',
  min: -Infinity,
  max: +Infinity,
  step: 1,
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
