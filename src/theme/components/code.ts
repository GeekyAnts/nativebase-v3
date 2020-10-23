const defaultProps = {
  colorScheme: 'default',
};
const variants = {
  success: () => ({
    bg: 'success.0',
    color: 'success.1',
  }),
  danger: () => ({
    backgroundColor: 'danger.0',
    color: 'danger.1',
  }),
  warning: () => ({
    backgroundColor: 'warning.0',
    color: 'warning.1',
  }),
  dark: () => ({
    backgroundColor: 'dark.0',
    color: 'dark.1',
  }),
  light: () => ({
    backgroundColor: 'light.0',
    color: 'light.1',
  }),
  muted: () => ({
    backgroundColor: 'muted.0',
    color: 'muted.1',
  }),
  default: () => ({
    backgroundColor: 'default.0',
    color: 'default.1',
  }),
};

const baseStyle = {
  fontFamily: 'mono',
  fontSize: 'sm',
  borderRadius: 'sm',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
