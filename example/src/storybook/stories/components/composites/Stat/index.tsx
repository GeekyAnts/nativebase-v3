import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Example from './Example';
import Indicator from './Indicator';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Stat', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Default Stat', () => <Example />)
  .add('Stat with Indicator', () => <Indicator />);
