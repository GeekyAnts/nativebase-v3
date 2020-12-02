import { Platform } from 'react-native';

function roundedStyle() {
  return {
    borderRadius: '50',
    borderWidth: 1,
    borderColor: 'gray.400',
  };
}
function defaultStyle() {
  return {
    borderWidth: 1,
    borderColor: 'gray.400',
  };
}
function filledStyle() {
  return {
    bg: 'gray.200',
  };
}
function unstyledStyle() {
  return {
    borderWidth: 0,
  };
}
function underlinedStyle() {
  return {
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'gray.400',
    borderBottomWidth: 1,
  };
}

const variants = {
  outline: defaultStyle,
  underlined: underlinedStyle,
  rounded: roundedStyle,
  filled: filledStyle,
  unstyled: unstyledStyle,
  default: defaultStyle,
};

const sizes = {
  '2xl': { fontSize: '2xl' },
  'xl': { fontSize: 'xl' },
  'lg': { fontSize: 'lg' },
  'md': { fontSize: 'md' },
  'sm': { fontSize: 'sm' },
  'xs': { fontSize: 'xs' },
};

const defaultProps = {
  w: '100%',
  size: 'md',
  variant: 'default',
  _isDisabledProps: {
    bg: 'gray.100',
    borderColor: 'gray.300',
  },
  p: Platform.OS === 'android' ? 2 : 3, // Android's input have default padding.
};

export default {
  variants,
  sizes,
  defaultProps,
};
