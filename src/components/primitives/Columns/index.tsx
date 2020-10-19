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

export type IColumnsProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledColumns = styled.View<IColumnsProps>(
  { flexDirection: 'row' },
  color,
  spacing,
  layout,
  flexbox,
  border
);

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ColumnsProps = IColumnsProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
    divider?: JSX.Element | undefined;
  };

const Columns = ({ space, children, divider, ...props }: ColumnsProps) => {
  return (
    <StyledColumns {...props}>
      {getSpacedChildren(children, space, 'X', 'normal', divider)}
    </StyledColumns>
  );
};

export default Columns;
