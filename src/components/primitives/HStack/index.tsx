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

export type IHStackProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledHStack = styled.View<IHStackProps>`
  flex-direction: row;
  flex-wrap: wrap;
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
`;

type SpaceType =
  | 'gutter'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

type HStackProps = IHStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    divider?: JSX.Element;
    space?: number | SpaceType;
    reversed?: any | undefined;
  };

const HStack = ({
  space,
  children,
  reversed,
  divider,
  ...props
}: HStackProps) => {
  let reverse: string = reversed ? 'reverse' : 'normal';
  return (
    <StyledHStack {...props}>
      {getSpacedChildren(children, space, 'X', reverse, divider)}
    </StyledHStack>
  );
};

export default HStack;
