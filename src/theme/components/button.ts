import { Dict, mode } from './../tools';

const baseStyle = {
  // lineHeight: 1.2,
  borderRadius: 'md',
  fontWeight: 'semibold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
function variantGhost(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.9`)(props),
    };
  }

  return {
    color: mode(`${c}.6`, `${c}.2`)(props),
    bg: 'transparent',
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.2`, `whiteAlpha.3`)(props);
  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : mode(`${c}.6`, `${c}.2`)(props),
    ...variantGhost(props),
  };
}

type AccessibleColor = {
  bg?: string;
  color?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.4',
    color: 'black',
  },
  cyan: {
    bg: 'cyan.4',
    color: 'black',
  },
};

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'gray')
    return {
      bg: mode(`gray.1`, `whiteAlpha.2`)(props),
    };
  const { bg = `${c}.4`, color = 'white' } = accessibleColorMap[c] || {};
  return {
    bg: mode(bg, `${c}.2`)(props),
    color: mode(color, `gray.8`)(props),
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    // lineHeight: 'normal',
    color: mode(`${c}.5`, `${c}.2`)(props),
    textDecorationLine: 'underline',
  };
}

const variantUnstyled = {
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
};
const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    minH: 12,
    minW: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    minH: 10,
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    minH: 8,
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    minH: 6,
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
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
