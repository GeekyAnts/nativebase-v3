import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, layout, space } from 'styled-system';

export type ISpinnerProps = {
  color?: string | undefined;
  style?: any | undefined;
  show?: boolean | undefined;
  hideWhenStopped?: boolean | undefined; // IOS only
  size?: 'large' | 'small' | number | undefined;
};

const StyledActivityIndicator = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  layout
);
const Spinner = ({ size, show, hideWhenStopped, ...props }: ISpinnerProps) => {
  return (
    <StyledActivityIndicator
      size={size ? size : 'small'}
      animating={show ? show : true}
      hidesWhenStopped={hideWhenStopped ? hideWhenStopped : true}
      {...props}
    />
  );
};

export default Spinner;
