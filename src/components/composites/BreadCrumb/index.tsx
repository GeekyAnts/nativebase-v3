import React, { useContext } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle, Text } from 'react-native';
import styled from 'styled-components/native';
import type * as CSS from 'csstype';
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
import { Flex } from '../../primitives';
import { Link, ILinkProps } from '../../..';
import { ThemeContext } from '../../../index';

export type IBreadCrumbProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    direction?: CSS.Property.FlexDirection | undefined;
    align?: CSS.Property.AlignItems | undefined;
    justify?: CSS.Property.JustifyContent | undefined;
    wrap?: CSS.Property.FlexWrap | undefined;
    basis?: CSS.Property.FlexBasis | undefined;
    grow?: CSS.Property.FlexGrow | undefined;
    separator?: string | undefined;
    fontSize?: number;
  };
export type ITextProps = ViewProps &
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
    style?: ViewStyle;
    children?: string;
  };

const StyledText = styled(Text)<ITextProps>(
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
export const BreadCrumbItem = (props: IBreadCrumbProps) => {
  return <Flex {...props}>{props.children}</Flex>;
};
export const BreadCrumbLink = ({ children, ...props }: ILinkProps) => {
  return <Link {...props}>{children}</Link>;
};
const BreadCrumbSeparator = (
  children: JSX.Element[] | JSX.Element | any,
  separator: string | undefined,
  size: number
) => {
  const theme = useContext(ThemeContext);
  if (children.length == 1) {
    return children;
  }
  const separatorElement = (
    <StyledText mx={2}>{separator ? separator : '/'}</StyledText>
  );

  var result: any = [];
  if (children && children.length > 1) {
    result = children.reduce(
      (r: any[], a: any) => r.concat(a, separatorElement),
      [separatorElement]
    );
  }
  result = result.slice(1, -1);

  return result.map((child: any) => {
    return React.cloneElement(child, {
      style: { fontSize: theme.fontSizes[size] },
    });
  });
};

const StyledBreadCrumb = styled(View)<IBreadCrumbProps>(
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
const BreadCrumb = ({
  style,
  children,
  separator,
  fontSize,
  ...props
}: IBreadCrumbProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'row',
    },
  ]);

  return (
    <StyledBreadCrumb {...props} style={computedStyle}>
      {children && !children.length
        ? children
        : BreadCrumbSeparator(children, separator, fontSize ? fontSize : 2)}
    </StyledBreadCrumb>
  );
};

export default BreadCrumb;
