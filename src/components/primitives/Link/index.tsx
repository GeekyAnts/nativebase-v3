import {
  StyleSheet,
  View,
  ViewStyle,
  Linking,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';
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
  variant,
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
import { addTextAndPropsToStrings } from '../../../utils';
import React from 'react';
export type ILinkProps = ColorProps &
  ViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TouchableWithoutFeedbackProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    children?: string | JSX.Element | JSX.Element[] | any;
    fontSize?: string | undefined;
    href?: string | undefined;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;
    isUnderlined?: boolean | undefined;
    onClick?: any;
    isExternal?: boolean;
  };

const StyledLink = styled(View)<ILinkProps>(
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
  customLayout,
  variant({
    prop: 'size',
    variants: {
      '2xl': { fontSize: 5 },
      'xl': { fontSize: 4 },
      'lg': { fontSize: 3 },
      'md': { fontSize: 2 },
      'sm': { fontSize: 1 },
      'xsm': { fontSize: 0 },
    },
  })
);
const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
};

const addStyleAndPropsToChild = (
  props: any,
  children: JSX.Element[] | JSX.Element,
  IsUnderlined: boolean
) => {
  const computedProps = {
    ...props,
    style: {
      width: 'auto',
      height: 'auto',
      textDecorationLine: IsUnderlined ? 'underline' : 'none',
    },
  };
  if (Array.isArray(children)) {
    return children.map((child: JSX.Element) => {
      return React.cloneElement(child, computedProps, child.props.children);
    });
  } else {
    return React.cloneElement(children, computedProps, children.props.children);
  }
};

const addOnPressFunctionality = (
  href: string | any,
  isExternal: any,
  callback: any
) => {
  href && isExternal ? linkToHREF(href) : '';
  callback();
};

const Link = ({
  style,
  href,
  isUnderlined = true,
  onClick,
  isExternal,
  children,
  m,
  mt,
  mr,
  ml,
  mb,
  p,
  pt,
  pl,
  pr,
  pb,
  w,
  width,
  h,
  height,
  ...props
}: ILinkProps) => {
  const layoutProps = {
    m: m,
    mt: mt,
    mr: mr,
    ml: ml,
    mb: mb,
    p: p,
    pt: pt,
    pr: pr,
    pl: pl,
    pb: pb,
    w: w,
    width: width,
    h: h,
    height: height,
  };

  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      width: 'auto',
      height: 'auto',
      textDecorationLine: isUnderlined ? 'underline' : 'none',
    },
  ]);

  return (
    <StyledLink {...layoutProps}>
      <TouchableWithoutFeedback
        onPress={() => {
          addOnPressFunctionality(href, isExternal, onClick);
        }}
        {...props}
      >
        <StyledLink style={computedStyle}>
          {addStyleAndPropsToChild(
            props,
            addTextAndPropsToStrings(children, props),
            isUnderlined
          )}
        </StyledLink>
      </TouchableWithoutFeedback>
    </StyledLink>
  );
};

export default Link;
