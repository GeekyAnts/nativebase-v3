import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Composition from './Composition';
import Basic from './Basic';
import Rounded from './Rounded';
import CustomBgColor from './CustomBgColor';
import ColorScheme from './ColorScheme';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Default Progress Bar', () => <Basic />)
  .add('ColorSchemes', () => <ColorScheme />)
  .add('Rounded', () => <Rounded />)
  .add('CustomBgColor', () => <CustomBgColor />)
  .add('Composition', () => <Composition />);
