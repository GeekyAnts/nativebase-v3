import { getColor } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { theme, isInvalid } = props;
  const activeColor = activeColorSetter(props);
  return {
    activeColor,
    borderColor: isInvalid ? theme.colors.danger[2] : theme.colors.muted[0],
    iconColor: theme.colors.light[2],
  };
};

const activeColorSetter = (props: Record<string, any>) => {
  const { theme, colorScheme, isDisabled } = props;
  if (isDisabled) return theme.colors.gray[3];
  else return getColor(theme, colorScheme, theme.colors.default[0]);
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
