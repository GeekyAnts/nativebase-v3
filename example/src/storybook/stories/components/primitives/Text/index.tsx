import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
// import Text from './example';
import ChangingFontSize from './ChangingFontSize';
import Overriden from './Overriden';
import Truncated from './Truncated';
import Nested from './Nested';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Changing Font Size', () => <ChangingFontSize />)
  .add('Truncated', () => <Truncated />)
  .add('Overriden', () => <Overriden />)
  .add('Nested', () => <Nested />);
