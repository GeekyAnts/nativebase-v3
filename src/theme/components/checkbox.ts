import { getColor } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const activeColor = activeColorSetter(props);
  return {
    activeColor,
    borderColor: isInvalid ? 'danger.2' : 'muted.0',
    iconColor: 'light.2',
  };
};

const activeColorSetter = (props: Record<string, any>) => {
  const { theme, colorScheme, isDisabled } = props;
  if (isDisabled) return 'gray.3';
  else return getColor(theme, colorScheme, 'default.2');
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
