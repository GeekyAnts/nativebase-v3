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

type IStackProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledStack = styled(View)<IStackProps>(
  color,
  spacing,
  layout,
  flexbox,
  border
);
type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type StackProps = IStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    divider?: JSX.Element;
    space?: number | SpaceType;
    reversed?: boolean;
  };

const Stack = ({
  space,
  children,
  divider,
  reversed,
  direction,
  ...props
}: StackProps & { direction?: 'column' | 'row' }) => {
  return (
    <StyledStack flexDirection={direction} {...props}>
      {getSpacedChildren(
        children,
        space,
        direction === 'row' ? 'X' : 'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </StyledStack>
  );
};

const VStack = (props: StackProps) => {
  return Stack(props);
};
const HStack = (props: StackProps) => {
  return Stack({ ...props, direction: 'row' });
};
export default Stack;
export { VStack, HStack, IStackProps };
