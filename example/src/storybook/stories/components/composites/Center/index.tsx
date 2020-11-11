import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Basic from './Basic';
import WithIcons from './WithIcons';
import SquareCircle from './SquareCircle';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Center', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('WithIcons', () => <WithIcons />)
  .add('SquareCircle', () => <SquareCircle />);
