import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import type { SpaceType } from './types';

export type ButtonGroupProps = {
  children: Element | Element[];
  variant?: string | undefined;
  size?: SpaceType | string | undefined;
  spacing?: number;
};
const StyledButtonGroup = styled.View<ButtonGroupProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  { flexDirection: 'row', flexWrap: 'wrap' }
);

export const ButtonGroupContext = React.createContext({});
export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <ButtonGroupContext.Provider value={props}>
      <StyledButtonGroup>{children}</StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};
