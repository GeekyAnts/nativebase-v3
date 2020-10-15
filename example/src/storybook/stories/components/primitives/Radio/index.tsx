import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Playground from './knobEnabled';
import Disabled from './disabled';
import Usage from './usage';
import CustomColor from './customeColor';
import Size from './size';
import Invalid from './invalid';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Radio', module)
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
  .add('Playgroud', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('CustomColor', () => <CustomColor />)
  .add('Size', () => <Size />)
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />);