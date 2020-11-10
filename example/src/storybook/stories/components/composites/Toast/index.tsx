import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Usage from './Usage';
import Position from './Position';
import Offset from './Offset';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Usage', () => <Usage />)
  .add('Position', () => <Position />)
  .add('Offset', () => <Offset />);
