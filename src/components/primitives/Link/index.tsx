import {
  StyleSheet,
  View,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { addTextAndPropsToStrings } from '../../../utils';
import React from 'react';
import type { ILinkProps } from './props';

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
  customLayout
  // variant({
  //   prop: 'size',
  //   variants: {
  //     '2xl': { fontSize: 5 },
  //     xl: { fontSize: 4 },
  //     lg: { fontSize: 3 },
  //     md: { fontSize: 2 },
  //     sm: { fontSize: 1 },
  //     xsm: { fontSize: 0 },
  //   },
  // })
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
  return React.Children.map(children, (child: any) =>
    React.cloneElement(child, computedProps, child.props.children)
  );
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
    m,
    mt,
    mr,
    ml,
    mb,
    p,
    pt,
    pr,
    pl,
    pb,
    w,
    width,
    h,
    height,
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
export { ILinkProps } from './props';
