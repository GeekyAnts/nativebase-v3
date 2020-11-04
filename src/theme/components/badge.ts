import { transparentize } from '../tools';

const baseStyle = {
  px: 1,
  textTransform: 'uppercase',
  fontSize: 'xs',
  borderRadius: 'sm',
  fontWeight: 'bold',
};

function getActiveColor(props: Record<string, any>) {
  const { colorScheme, theme } = props;
  let activeColor = theme.colors.default[2];
  if (colorScheme[0] === '#') activeColor = colorScheme;
  else if (colorScheme in theme.colors && theme.colors[colorScheme]) {
    activeColor =
      typeof theme.colors[colorScheme] === 'string'
        ? theme.colors[colorScheme]
        : theme.colors[colorScheme][5] || theme.colors[colorScheme][2];
  } else activeColor = theme.colors.muted[2];

  return activeColor;
}
function variantSolid(props: Record<string, any>) {
  let activeColor = getActiveColor(props);
  return {
    bg: activeColor,
    color: props.theme.colors.white,
  };
}

function variantSubtle(props: Record<string, any>) {
  let activeColor = getActiveColor(props);
  return {
    bg: transparentize(activeColor, 0.16)(props.theme),
    color: activeColor,
  };
}

function variantOutline(props: Record<string, any>) {
  let activeColor = getActiveColor(props);
  return {
    borderColor: activeColor,
    color: activeColor,
    borderWidth: 2,
  };
}

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
