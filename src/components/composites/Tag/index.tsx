import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { CloseButton, Box, IIconProps, Icon, Text, ITextProps } from '../../..';
import type { ICloseButtonProps } from '../CloseButton/props';
import type { ITagProps } from './props';
import { usePropsConfig } from '../../../theme';

const StyledTag = styled(Box)<ITagProps>({});

export const TagLabel = (props: ITextProps) => {
  return <Text {...props} />;
};
export const TagLeftIcon = (props: IIconProps) => {
  return <Icon mr={2} {...props} />;
};
export const TagRightIcon = (props: IIconProps) => {
  return <Icon ml={2} {...props} />;
};
export const TagCloseButton = ({
  style,
  ...props
}: ICloseButtonProps & { fontSize?: number }) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([style, { fontWeight: '700' }]);
  return (
    <CloseButton
      ml={2}
      fontSize={props.fontSize}
      style={computedStyle}
      {...props}
    />
  );
};
const Tag = ({ style, ...props }: ITagProps) => {
  let newProps = usePropsConfig('Tag', props);
  return <StyledTag style={style} {...newProps} />;
};

export default Tag;
