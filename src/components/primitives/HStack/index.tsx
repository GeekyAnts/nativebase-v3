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
  space as spacing,
} from "styled-system";

import { getSpacedChildren } from "../../../utils";

export type IHStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

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
  | "gutter"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type HStackProps = IHStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
  };

const HStack = ({ space, children, ...props }: HStackProps) => {
  return <StyledHStack {...props}>{getSpacedChildren(children, space, "X")}</StyledHStack>;
};

export default HStack;
