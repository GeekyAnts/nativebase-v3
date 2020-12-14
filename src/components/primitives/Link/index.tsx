import React from 'react';
import {
  View,
  Linking,
  TouchableWithoutFeedback,
  StyleSheet,
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
  customTypography,
} from '../../../utils/customProps';
import { addTextAndPropsToStrings } from '../../../utils';
import type { ILinkProps } from './props';
import Box from '../Box';
import { usePropsConfig } from '../../../theme';

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
  customTypography
);
const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
};

const addStyleAndPropsToChild = (
  props: any,
  children: JSX.Element[] | JSX.Element,
  IsUnderlined: boolean
) => {
  return React.Children.map(children, (child: any) => {
    let computedStyle: any = child.props.style;
    computedStyle = StyleSheet.flatten([
      child.props.style,
      { textDecorationLine: IsUnderlined ? 'underline' : 'none' },
    ]);
    return React.cloneElement(
      child,
      { ...props, ...child.props, style: computedStyle },
      child.props.children
    );
  });
};

const addOnPressFunctionality = (
  href: string | any,
  isExternal: any,
  callback: any
) => {
  href && isExternal ? linkToHREF(href) : '';
  callback ? callback() : () => {};
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
  let newProps = usePropsConfig('Link', props);
  return (
    <Box {...layoutProps}>
      <TouchableWithoutFeedback
        onPress={() => {
          addOnPressFunctionality(href, isExternal, onClick);
        }}
        {...newProps}
      >
        <StyledLink
          {...newProps}
          textDecorationLine={isUnderlined ? 'underline' : 'none'}
          style={style}
        >
          {addStyleAndPropsToChild(
            newProps,
            addTextAndPropsToStrings(children, newProps),
            isUnderlined
          )}
        </StyledLink>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default Link;
export type { ILinkProps };
