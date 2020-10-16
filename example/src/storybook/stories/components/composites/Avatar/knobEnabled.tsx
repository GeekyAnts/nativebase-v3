import React from 'react';
import { Avatar, AvatarBadge, Heading, Inline, Text, View } from 'native-base';
import { color, number, select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Avatar </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>
      <Avatar
        src={text(
          'src',
          'https://nativebase.io/assets/img/front-page-icon.png'
        )}
        size={select('size', ['sm', 'md', 'lg'], 'md')}
        name={text('name', 'Native Base')}
      >
        <AvatarBadge
          badgeColor={color('badgeColor', 'red')}
          badgeSize={number('badgeSize', 10, {
            range: true,
            min: 0,
            max: 40,
            step: 1,
          })}
        />
      </Avatar>
    </View>
  );
}
