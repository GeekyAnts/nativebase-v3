const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const activeColor = activeColorSetter(props);
  return {
    activeColor,
    borderColor: isInvalid ? 'danger.200' : 'muted.50',
    iconColor: 'light.200',
  };
};

const activeColorSetter = (props: Record<string, any>) => {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];

  if (isDisabled) return 'gray.300';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][4] ||
          theme.colors[simpleColorScheme][2];
  } else return 'default.200';
};

const sizes = {
  lg: { size: 5 },
  md: { size: 4 },
  sm: { size: 3 },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'default',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
