import React from 'react';
import { Flex } from '../../..';
import type { IBreadCrumbProps } from './props';
export { BreadCrumbItem } from './BreadCrumbItem';
export { Link as BreadCrumbLink } from 'native-base';
import { BreadCrumbSeparator } from './BreadCrumbSeparator';
import { usePropsConfig } from '../../../theme';

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
  let newProps = usePropsConfig('BreadCrumb', props);
  return (
    <Flex {...newProps} style={style}>
      {children && !children.length
        ? children
        : BreadCrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};

export default BreadCrumb;
