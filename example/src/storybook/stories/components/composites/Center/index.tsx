import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Basic from './Basic';
import WithIcons from './WithIcons';
import SquareCircle from './SquareCircle';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Center', module)
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
  .add('Basic', () => <Basic />)
  .add('WithIcons', () => <WithIcons />)
  .add('SquareCircle', () => <SquareCircle />);