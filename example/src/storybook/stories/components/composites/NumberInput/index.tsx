import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Usage from './Usage';
import FormControlled from './FormControlled';
import Steps from './Steps';
import DefaultValue from './DefaultValue';
import Playground from './Playground';
// import Combination from './Combination';
import MinMax from './MinMax';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('NumberInput', module)
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
  .add('DefaultValue', () => <DefaultValue />)
  .add('MinMax', () => <MinMax />)
  .add('Steps', () => <Steps />)
  .add('FormControlled', () => <FormControlled />);
// .add('Combination', () => <Combination />);
