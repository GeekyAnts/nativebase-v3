import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Playground from './knobEnabled';
import Usage from './usage';
import Size from './size';
import Fallback from './Fallback';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Fallback', () => <Fallback />)
  .add('AvatarBadge', () => <AvatarBadge />)
  .add('AvatarGroup', () => <AvatarGroup />);
