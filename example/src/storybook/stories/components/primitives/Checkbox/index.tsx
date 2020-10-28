import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Playground from './knobEnabled';
import Disabled from './disabled';
import CustomColor from './customColor';
import Size from './size';
import Invalid from './invalid';
import CheckboxGroup from './checkboxGroup';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playgroud', () => <Playground />)
  .add('Disabled', () => <Disabled />)
  .add('CustomColor', () => <CustomColor />)
  .add('Size', () => <Size />)
  .add('Invalid', () => <Invalid />)
  .add('CheckboxGroup', () => <CheckboxGroup />);
