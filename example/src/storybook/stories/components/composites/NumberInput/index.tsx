import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
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
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('MinMax', () => <MinMax />)
  .add('Steps', () => <Steps />)
  .add('FormControlled', () => <FormControlled />);
// .add('Combination', () => <Combination />);
