import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Playground from './knobEnabled';
import Usage from './usage';
import Size from './size';
import Fallback from './Fallback';
import AvatarBadge from './AvatarBadge';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Fallback', () => <Fallback />)
  .add('AvatarBadge', () => <AvatarBadge />);
