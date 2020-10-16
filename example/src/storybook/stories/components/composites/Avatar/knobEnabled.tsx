import React from 'react';
import { Avatar, AvatarBadge, Heading, Inline, Text, View } from 'native-base';
import { boolean, color, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const radioValue = text('value', 'Cool');
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
        <AvatarBadge badgeColor={color('badgeColor', 'red')}>
          Are you Awesome?
        </AvatarBadge>
      </Avatar>
      <Text>
        {toggleCheckBox ? 'Yes, you are and also ' : 'No, But you are '}
        {radioValue}
      </Text>
    </View>
  );
}
