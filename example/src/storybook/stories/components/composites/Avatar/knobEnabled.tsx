import React from 'react';
import { Avatar, AvatarBadge } from 'native-base';
import { color, select, number, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Avatar
      src={text('src', 'https://nativebase.io/assets/img/front-page-icon.png')}
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      name={text('name', 'NativeBase')}
    >
      <AvatarBadge
        bg={color('badgeColor', 'red')}
        boxSize={number('badgeSize', 5, {
          range: true,
          min: 0,
          max: 40,
          step: 1,
        })}
      />
    </Avatar>
  );
}
