import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';

import {
  DefaultInput,
  SizeInput,
  VariantInput,
  InputAddons,
  InputELements,
  PasswordInput,
  ControlledInput,
  FocusErrorBorderColor,
} from './example';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Primary', () => <DefaultInput />)
  .add('Size Input', () => <SizeInput />)
  .add('Input Variants', () => <VariantInput />)
  .add('Input Addons', () => <InputAddons />)
  .add('Input Elements', () => <InputELements />)
  .add('Input Password', () => <PasswordInput />)
  .add('Value Controlled Input', () => <ControlledInput />)
  .add('Focus and Error Border Color Change', () => <FocusErrorBorderColor />);
