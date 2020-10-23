import React from 'react';
import { StyleSheet } from 'react-native';
import { Flex } from '../../..';
import type { IBreadCrumbProps } from './props';
export { BreadCrumbItem } from './BreadCrumbItem';
export { BreadCrumbLink } from './BreadCrumbLink';
import { BreadCrumbSeparator } from './BreadCrumbSeparator';

const BreadCrumb = ({
  style,
  children,
  separator,
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
  fontWeight,
  bold,
  italic,
  underline,
  strikeThrough,
  isTruncated,
  noOfLines,
  spacing,
  ...props
}: IBreadCrumbProps) => {
  const textProps = {
    fontWeight,
    fontFamily,
    fontSize,
    color,
    textDecoration,
    txtDecor,
    wordBreak,
    textOverflow,
    textTransform,
    whiteSpace,
    overflowWrap,
    bold,
    italic,
    underline,
    strikeThrough,
    isTruncated,
    noOfLines,
  };

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
    <Flex wrap="wrap" {...props} style={computedStyle}>
      {children && !children.length
        ? children
        : BreadCrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};

export default BreadCrumb;
