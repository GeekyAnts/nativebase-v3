import React, { useState } from 'react';
import { StyleSheet, Image, ImageProps, Text } from 'react-native';
import styled from 'styled-components';
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  flex,
  layout,
  space,
} from 'styled-system';
import { customBorder, customBorderProps } from '../../../utils/customProps';
import { Box } from '../../primitives';
import theme from '../../../theme';

export type IAvatarProps = LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    avatarSize?: number | undefined;
    boxSize?: number | undefined;
    name?: string | undefined;
    style?: any;
  };
const getInitials = (str: string) => {
  var nameArr = str.split(' ');
  return nameArr[0].substr(0, 1) + nameArr[nameArr.length - 1].substr(0, 1);
};

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export const AvatarBadge = ({
  boxSize,
  style,
  badgeColor,
  ...props
}: IAvatarProps & { badgeColor?: string | undefined }) => {
  let computedStyle = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      backgroundColor: badgeColor ? badgeColor : theme.colors.indigo[4],
      position: 'absolute',
      right: 0,
      bottom: 0,
      marginRight: '7%',
      marginBottom: '7%',
      borderWidth: 2,
      borderColor: 'white',
    },
  ]);
  return (
    <Box
      borderRadius={50}
      style={computedStyle}
      width={boxSize ? boxSize : 10}
      height={boxSize ? boxSize : 10}
      {...props}
    ></Box>
  );
};
const StyledAvatar = styled(Image)<IAvatarProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Avatar = ({
  avatarSize,
  style,
  height,
  width,
  name,
  children,
  ...props
}: IAvatarProps &
  ImageProps & { children?: JSX.Element[] | JSX.Element | any }) => {
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    setAlternate(true);
  };
  let computedStyle = style;
  if (avatarSize) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: avatarSize,
        height: avatarSize,
      },
    ]);
  } else {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: 100,
        height: 100,
      },
    ]);
  }
  var textStyle: any = {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  };
  if (alternate) {
    return (
      <Box
        bg={getRandomColor()}
        borderRadius={50}
        width={avatarSize ? avatarSize : 100}
        height={avatarSize ? avatarSize : 100}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={textStyle}>{name ? getInitials(name) : '---'}</Text>
        {children}
      </Box>
    );
  }
  return (
    <Box
      width={avatarSize ? avatarSize : 100}
      height={avatarSize ? avatarSize : 100}
      style={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledAvatar
        borderRadius={50}
        style={computedStyle}
        {...props}
        onError={onImageLoadError}
      />
      {children}
    </Box>
  );
};

export default Avatar;
