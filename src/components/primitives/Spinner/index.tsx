import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { ThemeContext } from '../../../theme';
import { get } from 'lodash';
import { color, space, position } from 'styled-system';
import type { ISpinnerProps } from './props';
export type { ISpinnerProps };

const StyledActivityIndicator = styled(ActivityIndicator)<
  ISpinnerProps & {
    size?: 'small' | 'large';
  }
>(color, space, position);
const Spinner = (
  props: ISpinnerProps & {
    size?: 'sm' | 'lg' | 'small' | 'large';
  }
) => {
  const theme = React.useContext(ThemeContext);
  let {
    size,
    color: colorProp,
    show,
    hideWhenStopped,
    ...remainingProps
  } = props;
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

  if (colorProp === undefined) colorProp = theme.colors.default[2];
  else if (colorProp in theme.colors && theme.colors[colorProp]) {
    colorProp =
      typeof theme.colors[colorProp] === 'string'
        ? theme.colors[colorProp]
        : theme.colors[colorProp][5] || theme.colors[colorProp][2];
  } else {
    colorProp = get(theme.colors, colorProp);
  }
  return (
    <StyledActivityIndicator
      size={size}
      color={colorProp}
      animating={show ? show : true}
      hidesWhenStopped={hideWhenStopped ? hideWhenStopped : true}
      {...remainingProps}
    />
  );
};

export default Spinner;
