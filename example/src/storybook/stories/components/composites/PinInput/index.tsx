import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Usage from './Usage';
import ManageFocus from './ManageFocus';
import DefaultValue from './DefaultValue';
import Size from './Size';
import Playground from './Playground';
import Variants from './Variants';
import Placeholder from './Placeholder';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('PinInput', module)
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
  .add('Playground', () => <Playground />)
  .add('ManageFocus', () => <ManageFocus />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Variants', () => <Variants />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('Placeholder', () => <Placeholder />);
