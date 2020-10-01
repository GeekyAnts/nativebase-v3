import React from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";
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
  position,
  space as spacing,
} from "styled-system";

import { getAbsoluteChildren } from "../../../utils";

export type IZStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledZStack = styled.View<IZStackProps>`
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`;

type ZStackProps = IZStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
  };

const ZStack = ({ children, ...props }: ZStackProps) => {
  return (
    <StyledZStack width="100%" alignItems="center" {...props}>
      {getAbsoluteChildren(children)}
    </StyledZStack>
  );
};

export default ZStack;
