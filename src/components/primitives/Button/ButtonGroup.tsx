import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';

import { getAttachedChildren } from '../../../utils';
import type { SpaceType } from './types';

export type ButtonGroupProps = {
  children: Element | Element[];
  variant?: string | undefined;
  size?: SpaceType | string | undefined;
  spacing?: number;
};
const StyledButtonGroup = styled.View<ButtonGroupProps>`
  flex-direction: row;
  flex-wrap: wrap;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

const supplyPropsToChildren = (children: any, props: any) => {
  return children.map((child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup>
      {supplyPropsToChildren(getAttachedChildren(children), props)}
    </StyledButtonGroup>
  );
};
