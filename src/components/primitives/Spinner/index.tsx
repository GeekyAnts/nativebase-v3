import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position, get } from 'styled-system';
import { useTheme, usePropsConfig } from '../../../theme';
import type { ISpinnerProps } from './props';
export type { ISpinnerProps };

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner = (props: ISpinnerProps) => {
  const newProps = usePropsConfig('Spinner', props);
  const theme = useTheme();
  return (
    <StyledSpinner {...newProps} color={get(theme.colors, newProps.color)} />
  );
};

export default Spinner;
