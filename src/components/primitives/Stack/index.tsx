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

export type IStackProps =
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
  ...props
}: StackProps) => {
  return (
    <StyledStack {...props}>
      {getSpacedChildren(
        children,
        space,
        'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </StyledStack>
  );
};

export default Stack;
export { StackDivider } from './StackDivider';
