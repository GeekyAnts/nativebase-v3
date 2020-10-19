import React from 'react';
import type { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space as spacing,
} from 'styled-system';

import { getSpacedChildren } from '../../../utils';

export type IVStackProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledVStack = styled.View<IVStackProps>`
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
`;

type SpaceType =
  | 'gutter'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

type VStackProps = IVStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
  };

const VStack = ({ space, children, ...props }: VStackProps) => {
  return (
    <StyledVStack {...props}>
      {getSpacedChildren(children, space, 'Y')}
    </StyledVStack>
  );
};

export default VStack;
