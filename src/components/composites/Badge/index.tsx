import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
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
  space,
} from "styled-system";

import { shadows } from "../../../styles";
import { Text } from "../../primitives";

export type BadgeProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps & { shadow?: number; style?: ViewStyle; children?: JSX.Element | JSX.Element[] };

const StyledBox = styled(View)<BadgeProps>(color, space, layout, flexbox, border);

const Box = ({ shadow, style, ...props }: BadgeProps) => {
  let computedStyle: ViewStyle | undefined = style;

  const badgeDefaultProps: BadgeProps = {
    bg: "promote",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    ...props,
  };

  const updatedBadgeProps: BadgeProps = {
    ...badgeDefaultProps,
  };

  /*
  | If shadow prop exists, apply shadow style
  */
  if (shadow) {
    computedStyle = StyleSheet.flatten([
      style,
      shadows[shadow > shadows.length ? shadows.length : shadow],
    ]);
  }
  return (
    <StyledBox {...updatedBadgeProps} style={computedStyle}>
      <Text>1</Text>
    </StyledBox>
  );
};

export default Box;
