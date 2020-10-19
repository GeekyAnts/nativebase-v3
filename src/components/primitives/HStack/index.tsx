import React from 'react';
import { ViewProps, View } from 'react-native';
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

const StyledHStack = styled(View)<IHStackProps>(
  color,
  spacing,
  layout,
  flexbox,
  border
);

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
    <StyledHStack flexDirection="row" {...props}>
      {getSpacedChildren(children, space, 'X', reverse, divider)}
    </StyledHStack>
  );
};

export default HStack;
