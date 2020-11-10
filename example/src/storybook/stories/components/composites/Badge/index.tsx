import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Usage from './usage';
import Color from './color';
import Playground from './knobEnabled';
import Variants from './variants';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Badge', module)
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
  .add('Color', () => <Color />)
  .add('Variants', () => <Variants />);
