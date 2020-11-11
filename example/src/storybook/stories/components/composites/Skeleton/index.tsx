import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Usage from './Usage';
import Playground from './Playground';
import Loaded from './Loaded';
import Wrapper from './Wrapper';
import Color from './Color';
import Circle from './Circle';
import Text from './Text';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Wrapper', () => <Wrapper />)
  .add('Circle', () => <Circle />)
  .add('Text', () => <Text />)
  .add('Color', () => <Color />)
  .add('Loaded', () => <Loaded />);
