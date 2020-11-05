import React from 'react';
import styled from 'styled-components';
import { border, flex, layout, space } from 'styled-system';
import { customBorder } from '../../../utils/customProps';
import { Box, usePropsConfig, Image, Text } from 'native-base';
import type { IAvatarProps } from './props';

const initials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
};

const StyledAvatar = styled(Box)<IAvatarProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

export const Avatar = (
  props: IAvatarProps & {
    children?: JSX.Element[] | JSX.Element | any | undefined;
  }
) => {
  const { size, name, style, source, children, ...remainingProps } = props;
  const { color, fontSize, fontWeight, ...newProps } = usePropsConfig(
    'Avatar',
    { ...remainingProps, name, size }
  );
  const textProps = { color, fontSize, fontWeight };
  return (
    <StyledAvatar {...newProps} style={style}>
      {source ? (
        <Image
          borderRadius={newProps.borderRadius}
          source={source}
          alt={name ? initials(name) : '--'}
          textProps={{
            color,
            fontSize,
            fontWeight,
          }}
          style={{ height: '100%', width: '100%' }}
        />
      ) : (
        <Text {...textProps}>{name ? initials(name) : '--'}</Text>
      )}
      {children}
    </StyledAvatar>
  );
};