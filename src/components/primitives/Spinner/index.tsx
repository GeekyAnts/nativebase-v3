import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position } from 'styled-system';
import { useToken, usePropsConfig } from '../../../theme';
import type { ISpinnerProps } from './props';

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner = (props: ISpinnerProps) => {
  const newProps = usePropsConfig('Spinner', props);
  const spinnerColor = useToken('colors', newProps.color);
  return <StyledSpinner {...newProps} color={spinnerColor} />;
};

export default Spinner;
export type { ISpinnerProps };
