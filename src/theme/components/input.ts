function roundedStyle() {
  return {
    borderRadius: '50',
    borderWidth: 1,
    borderColor: 'gray.4',
  };
}
function defaultStyle() {
  return {
    borderWidth: 1,
    borderColor: 'gray.4',
  };
}
function filledStyle() {
  return {
    backgroundColor: 'gray.2',
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
    borderColor: 'gray.4',
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
    backgroundColor: 'gray.1',
    borderColor: 'gray.3',
  },
};

export default {
  variants,
  sizes,
  defaultProps,
};
