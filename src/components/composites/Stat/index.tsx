import React, { useContext } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
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
  space,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';
import { Box, IBoxProps } from '../../primitives';
import { ThemeContext } from '../../../theme';
export type IStatProps = TextProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    fontSize?: number | undefined;
  };

const StyledStat = styled(Text)<IStatProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

export const StatLabel = ({
  style,
  ...props
}: IStatProps & {
  children?: string | undefined;
}) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      color: props.color ? props.color : 'black',
    },
  ]);
  return <StyledStat style={computedStyle}>{props.children}</StyledStat>;
};
export const StatNumber = ({
  style,
  ...props
}: IStatProps & {
  children?: string | undefined;
}) => {
  const theme = useContext(ThemeContext);
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      color: props.color ? props.color : 'black',
      fontSize: props.fontSize ? props.fontSize : theme.fontSizes[3],
      fontWeight: '600',
    },
  ]);
  return (
    <StyledStat my={2} style={computedStyle}>
      {props.children}
    </StyledStat>
  );
};
export const StatHelpText = ({
  style,
  ...props
}: IStatProps & {
  children?: string | undefined;
}) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      color: props.color ? props.color : '#6b717d',
    },
  ]);
  return <StyledStat style={computedStyle}>{props.children}</StyledStat>;
};
const Stat = ({ style, ...props }: IBoxProps) => {
  return <Box w="100%" {...props} style={style} />;
};
export default Stat;
