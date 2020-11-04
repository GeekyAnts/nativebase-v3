const defaultProps = {
  bg: 'gray.2',
  colorScheme: 'default',
};

function baseStyle(props: Record<string, any>) {
  return {
    innerBg: `${props.colorScheme}.2`,
  };
}

const sizes = {
  'xs': {
    height: 4,
  },
  'sm': {
    height: 6,
  },
  'md': {
    height: 8,
  },
  'lg': {
    height: 10,
  },
  'xl': {
    height: 16,
  },
  '2xl': {
    height: 24,
  },
};

export default {
  baseStyle,
  defaultProps,
  sizes,
};
