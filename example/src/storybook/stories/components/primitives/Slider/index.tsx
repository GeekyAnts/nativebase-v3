import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Usage from './usage';
import Size from './Size';
import Color from './color';
import Value from './Value';
import FormControlled from './FormControlled';
import Customized from './Customized';
import Playground from './Playground';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Slider', module)
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
  .add('Color', () => <Color />)
  .add('Value', () => <Value />)
  .add('Customized', () => <Customized />)
  .add('Form Controlled', () => <FormControlled />);
