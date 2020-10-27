// import { Dict, mode } from './../utils';

const baseStyle = {
  lineHeight: '1.2',
  borderRadius: 'md',
  fontWeight: 'semibold',
  // _focus: {
  //   boxShadow: "outline",
  // },
  // _disabled: {
  //   opacity: 0.4,
  //   cursor: "not-allowed",
  //   boxShadow: "none",
  // },
};

const variants = {
  success: () => ({
    bg: 'success.2',
    borderColor: 'success.2',
    color: 'success.1',
  }),
  danger: () => ({
    bg: 'danger.2',
    borderColor: 'danger.2',
    color: 'danger.1',
  }),
  warning: () => ({
    bg: 'warning.2',
    borderColor: 'warning.2',
    color: 'warning.1',
  }),
  dark: () => ({
    bg: 'dark.2',
    borderColor: 'dark.2',
    color: 'dark.1',
  }),
  light: () => ({
    bg: 'light.2',
    borderColor: 'light.2',
    color: 'light.1',
  }),
  muted: () => ({
    bg: 'muted.2',
    borderColor: 'muted.2',
    color: 'muted.1',
  }),
  default: () => ({
    bg: 'default.2',
    borderColor: 'default.2',
    color: 'default.1',
  }),

  outline: () => ({
    bg: 'transparent',
    borderWidth: '1px',
  }),
  ghost: () => ({
    bg: 'transparent',
    borderWidth: '0px',
  }),
  link: () => ({
    bg: 'transparent',
    borderWidth: '0px',
  }),
  solid: () => ({
    color: 'white',
  }),
};

const sizes = {
  // lg: {
  //   h: 12,
  //   minW: 12,
  //   fontSize: 'lg',
  //   px: 6,
  // },
  // md: {
  //   h: 10,
  //   minW: 10,
  //   fontSize: 'md',
  //   px: 4,
  // },
  // sm: {
  //   h: 8,
  //   minW: 8,
  //   fontSize: 'sm',
  //   px: 3,
  // },
  // xs: {
  //   h: 6,
  //   minW: 6,
  //   fontSize: 'xs',
  //   px: 2,
  // },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
