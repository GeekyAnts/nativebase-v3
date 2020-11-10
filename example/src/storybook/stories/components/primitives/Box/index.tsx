import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import { Basic } from './basic';
import { Composite } from './composition';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Basic Box', () => <Basic />)
  .add('Composition using Box', () => <Composite />);
