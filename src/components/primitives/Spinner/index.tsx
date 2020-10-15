import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { ThemeContext } from '../../../theme';
import {
  ColorProps,
  SpaceProps,
  PositionProps,
  color,
  space,
  position,
} from 'styled-system';

export type ISpinnerProps = ColorProps &
  SpaceProps &
  PositionProps & {
    color?: string | undefined;
    style?: any | undefined;
    show?: boolean | undefined;
    hideWhenStopped?: boolean | undefined; // IOS only
  };

const StyledActivityIndicator = styled(ActivityIndicator)<
  ISpinnerProps & {
    size?: 'small' | 'large';
  }
>(color, space, position);
const Spinner = ({
  size,
  color,
  show,
  hideWhenStopped,
  ...props
}: ISpinnerProps & {
  size?: 'sm' | 'lg' | 'small' | 'large' | undefined;
}) => {
  const theme = React.useContext(ThemeContext);

  switch (size) {
    case 'sm':
      size = 'small';
      break;
    case 'lg':
      size = 'large';
      break;
    default:
      size = 'large';
      break;
  }
  // TODO: while revisiting we'll add different sizes of custom icon
  // currently it's only used make the size keyword consistent.

  if (color === undefined) color = theme.colors.default[2];
  else if (color in theme.colors && theme.colors[color])
    color =
      typeof theme.colors[color] === 'string'
        ? theme.colors[color]
        : theme.colors[color][5] || theme.colors[color][2];

  return (
    <StyledActivityIndicator
      size={size}
      color={color}
      animating={show ? show : true}
      hidesWhenStopped={hideWhenStopped ? hideWhenStopped : true}
      {...props}
    />
  );
};

export default Spinner;
