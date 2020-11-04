import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';

export type ButtonGroupProps = {
  children: JSX.Element | Array<JSX.Element>;
  variant?: string;
  size?: string | number;
  spacing?: string | number;
};
const StyledButtonGroup = styled.View<ButtonGroupProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  { flexDirection: 'row', flexWrap: 'wrap' }
);

export const ButtonGroup = ({
  children,
  spacing,
  ...props
}: ButtonGroupProps) => {
  return (
    <StyledButtonGroup>
      {React.Children.map(children, (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          ml: index !== 0 ? spacing : undefined,
          ...props,
        });
      })}
    </StyledButtonGroup>
  );
};
