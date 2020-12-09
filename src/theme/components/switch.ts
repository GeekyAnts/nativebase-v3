import { get } from 'lodash';
import { mode, getColorScheme } from '../tools';

function baseStyleTrack(props: Record<string, any>) {
  const { colorScheme: c, theme, offTrackColor: o } = props;
  const simplifiedColorScheme = getColorScheme(props);
  return c
    ? {
        false: o
          ? mode(theme.colors[o][400], theme.colors[o][100])(props)
          : mode(theme.colors.light[50], theme.colors.dark[50])(props),
        true: mode(
          theme.colors[simplifiedColorScheme][500],
          theme.colors[simplifiedColorScheme][200]
        )(props),
      }
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
