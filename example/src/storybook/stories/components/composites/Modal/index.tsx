import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Basic from './Basic';
import ModalRefEg from './ModalRefEg';
import Size from './Size';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('Modal Size Examples', () => <Size />)
  .add('Modal Ref Examples', () => <ModalRefEg />);
