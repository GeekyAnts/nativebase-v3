import { get } from 'lodash';

function baseStyleTrack(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  return c
    ? { false: theme.colors.light[0], true: theme.colors[c][2] }
    : undefined;
}
function baseStyleThumb(props: Record<string, any>) {
  return props.checked
    ? props.onColor
      ? get(props.theme.colors, props.onColor)
      : undefined
    : props.offColor
    ? get(props.theme.colors, props.offColor)
    : undefined;
}

const baseStyle = (props: Record<string, any>) => ({
  trackColor: baseStyleTrack(props),
  thumbColor: baseStyleThumb(props),
});

const sizes = {
  sm: {
    transform: [{ scale: 0.5 }],
  },
  md: {},
  lg: {
    transform: [{ scale: 1.5 }],
    margin: 4,
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'default',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
