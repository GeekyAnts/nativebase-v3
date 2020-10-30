import React, { useState } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import styled from 'styled-components';
import { border, flex, get, layout, space } from 'styled-system';
import { customBorder } from '../../../utils/customProps';
import { Box } from '../../primitives';
import { theme, usePropsConfig } from '../../../theme';
import type { IAvatarProps, IAvatarBadgeProps } from './props';

const getInitials = (str: string) => {
  let nameArr = str.split(' ');
  return nameArr[0].substr(0, 1) + nameArr[nameArr.length - 1].substr(0, 1);
};

// TODO: refactor this
export const AvatarBadge = (props: IAvatarBadgeProps) => {
  const { boxSize, style, bg, borderColor, ...remainingProps } = props;
  let computedStyle = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      backgroundColor: bg ? bg : theme.colors.blue[4],
      position: 'absolute',
      right: 0,
      bottom: 0,
      // marginRight: '2%',
      // marginBottom: '2%',
      borderWidth: 2,
      borderColor: borderColor || 'white',
    },
  ]);
  return (
    <Box
      borderRadius={50}
      style={computedStyle}
      width={boxSize ? boxSize : 10}
      height={boxSize ? boxSize : 10}
      {...remainingProps}
    />
  );
};

const StyledAvatar = styled(Box)<IAvatarProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

const Avatar = (
  props: IAvatarProps & {
    children?: JSX.Element[] | JSX.Element | any | undefined;
  }
) => {
  const { size, name, style, src, children, ...remainingProps } = props;

  const newProps = usePropsConfig('Avatar', { ...remainingProps, name, size });
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    setAlternate(true);
  };
  let textStyle: any = {
    color: 'white',
    fontSize: newProps.fontSize,
    fontWeight: '600',
  };
  return (
    <StyledAvatar {...newProps} style={style}>
      {!src || alternate ? (
        <Text style={textStyle}>{name ? getInitials(name) : '---'}</Text>
      ) : (
        <Image
          borderRadius={newProps.borderRadius}
          style={{
            width: parseInt(get(theme.sizes, newProps.width), 10),
            height: parseInt(get(theme.sizes, newProps.height), 10),
          }}
          source={{ uri: src }}
          onError={onImageLoadError}
        />
      )}
      {children}
    </StyledAvatar>
  );
};

export default Avatar;
export { IAvatarProps, IAvatarBadgeProps } from './props';
