import React, { useState } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
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
  variant,
} from 'styled-system';
import { customBorder, customBorderProps } from '../../../utils/customProps';
import { Box } from '../../primitives';
import { theme } from '../../../theme';

export type IAvatarProps = LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    name?: string | undefined;
    style?: any;
    size?: string | undefined;
    src?: string | undefined;
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
  badgeSize,
  style,
  badgeColor,
  ...props
}: IAvatarProps & {
  badgeColor?: string | undefined;
  badgeSize?: number | undefined;
}) => {
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
      width={badgeSize ? badgeSize : 10}
      height={badgeSize ? badgeSize : 10}
      {...props}
    ></Box>
  );
};

const Avatar = ({
  size,
  name,
  style,
  src,
  children,
  ...props
}: {
  children?: JSX.Element[] | JSX.Element | any | undefined;
} & IAvatarProps) => {
  const { fontSize, height, width } = style[0];
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    size && setAlternate(true);
  };

  let computedStyle = StyleSheet.create({
    width: width,
    height: height,
  });
  let textStyle: any = {
    color: 'white',
    fontSize: fontSize,
    fontWeight: '600',
  };
  return (
    <Box
      bg={getRandomColor()}
      borderRadius={250}
      width={width}
      height={height}
      style={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}
    >
      {!src || alternate ? (
        <Text style={textStyle}>{name ? getInitials(name) : '---'}</Text>
      ) : (
        <Image
          borderRadius={250}
          style={computedStyle}
          source={{ uri: src }}
          onError={onImageLoadError}
        />
      )}
      {children}
    </Box>
  );
};

const StyledAvatar = styled(Avatar)<IAvatarProps>(
  layout,
  space,
  border,
  flex,
  customBorder,
  variant({
    prop: 'size',
    variants: {
      '2xl': {
        fontSize: theme.fontSizes[5],
        width: 128,
        height: 128,
      },
      'xl': { fontSize: theme.fontSizes[4], width: 96, height: 96 },
      'lg': { fontSize: theme.fontSizes[3], width: 64, height: 64 },
      'md': { fontSize: theme.fontSizes[2], width: 48, height: 48 },
      'sm': { fontSize: theme.fontSizes[1], width: 32, height: 32 },
      'xs': { fontSize: theme.fontSizes[0], width: 24, height: 24 },
    },
  })
);

StyledAvatar.defaultProps = {
  size: 'lg',
};

const NBAvatar = ({
  children,
  ...props
}: IAvatarProps & {
  children?: JSX.Element[] | JSX.Element | any | undefined;
}) => {
  return <StyledAvatar {...props}>{children}</StyledAvatar>;
};

export default NBAvatar;
