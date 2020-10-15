import React from 'react';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { shadows } from '../../../styles';
import { Text } from '../../..';
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
  typography,
  TypographyProps,
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
  customTypography,
  customTypographyProps,
} from '../../../utils/customProps';

export type IBoxProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  TypographyProps &
  BorderProps & {
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[] | string | any;
    shadow?: number | undefined;
  };

const StyledBox = styled(View)<IBoxProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const addTextAndPropsToStrings = (
  children: JSX.Element | JSX.Element[] | string | any,
  props: any
) => {
  if (Array.isArray(children)) {
    return children.map((child: JSX.Element) => {
      if (typeof child === 'string') {
        return <Text {...props}>{child}</Text>;
      } else {
        if (child.type.name === 'NBText' || child.type.name === 'Heading') {
          return React.cloneElement(child, props, child.props.children);
        } else {
          return child;
        }
      }
    });
  } else {
    if (typeof children === 'string') {
      return <Text {...props}>{children}</Text>;
    } else {
      if (children.type.name === 'NBText' || children.type.name === 'Heading') {
        return React.cloneElement(children, props, children.props.children);
      } else {
        return children;
      }
    }
  }
};

const Box = ({
  shadow,
  children,
  fontSize,
  color,
  textDecoration,
  txtDecor,
  wordBreak,
  textOverflow,
  textTransform,
  whiteSpace,
  overflowWrap,
  fontFamily,
  ...props
}: IBoxProps) => {
  const textProps = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: color,
    textDecoration: textDecoration,
    txtDecor: txtDecor,
    wordBreak: wordBreak,
    textOverflow: textOverflow,
    textTransform: textTransform,
    whiteSpace: whiteSpace,
    overflowWrap: overflowWrap,
  };
  let computedStyle: any = props.style;
  let shadowInd: number = shadow ? (shadow > 9 ? 9 : shadow) : 2;
  computedStyle = StyleSheet.flatten([
    props.style,
    shadow ? shadows[shadowInd] : {},
  ]);
  return (
    <StyledBox {...props} style={computedStyle}>
      {addTextAndPropsToStrings(children, textProps)}
    </StyledBox>
  );
};

export default Box;
