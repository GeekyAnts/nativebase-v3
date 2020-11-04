import React from 'react';
import styled from 'styled-components/native';
import {
  CloseButton,
  Box,
  IIconProps,
  Icon,
  Text,
  TextProps,
  usePropsConfig,
} from 'native-base';

export { CloseButton as TagCloseButton };
import type { ITagProps } from './props';

const StyledTag = styled(Box)<ITagProps>({});

export const TagLabel = (props: TextProps) => {
  return <Text {...props} />;
};
export const TagLeftIcon = (props: IIconProps) => {
  return <Icon mr={2} {...props} />;
};
export const TagRightIcon = (props: IIconProps) => {
  return <Icon ml={2} {...props} />;
};

const Tag = ({ style, ...props }: ITagProps) => {
  let newProps = usePropsConfig('Tag', props);
  return <StyledTag style={style} {...newProps} />;
};

export default Tag;
