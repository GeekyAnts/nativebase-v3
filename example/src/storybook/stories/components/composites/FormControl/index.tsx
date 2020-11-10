import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Usage from './Usage';
import CustomStyle from './CustomStyle';
// import DefaultValue from './DefaultValue';
import Playground from './Playground';
// import MinMax from './MinMax';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('FormControl', module)
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
  // .add('DefaultValue', () => <DefaultValue />)
  // .add('MinMax', () => <MinMax />)
  .add('CustomStyle', () => <CustomStyle />);
