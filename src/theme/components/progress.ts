const defaultProps = {
  bg: 'gray.2',
  colorScheme: 'default',
  size: 'md',
};

function baseStyle(props: Record<string, any>) {
  return {
    innerBg: `${props.colorScheme}.2`,
  };
}

const sizes = {
  xs: {
    height: 1,
  },
  sm: {
    height: 2,
  },
  md: {
    height: 3,
  },
  lg: {
    height: 4,
  },
  xl: {
    height: 5,
  },
  '2xl': {
    height: 6,
  },
};

export default {
  baseStyle,
  defaultProps,
  sizes,
};
