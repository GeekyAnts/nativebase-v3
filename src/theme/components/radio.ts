import { getColorFormColorScheme } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const activeColor = getColorFormColorScheme(props);
  return {
    activeColor,
    borderColor: isInvalid ? 'danger.200' : 'muted.50',
    iconColor: 'light.200',
  };
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
