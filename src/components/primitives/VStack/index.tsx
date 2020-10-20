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

export type IVStackProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledVStack = styled(View)<IVStackProps>(
  color,
  spacing,
  layout,
  flexbox,
  border
);

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type VStackProps = IVStackProps &
  ViewProps & {
    divider?: JSX.Element;
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
    reversed?: any | undefined;
  };

const VStack = ({
  space,
  children,
  reversed,
  divider,
  ...props
}: VStackProps) => {
  let reverse: string = reversed ? 'reverse' : 'normal';
  return (
    <StyledVStack {...props}>
      {getSpacedChildren(children, space, 'Y', reverse, divider)}
    </StyledVStack>
  );
};

export default VStack;
