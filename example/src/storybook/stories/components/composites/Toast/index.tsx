import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Usage from './Usage';
import Size from './Size';
import CustomIcon from './CustomIcon';
import DefaultValue from './Colors';
// import Playground from './Playground';
import Custom from './Custom';
import Position from './Position';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  // .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('Custom', () => <Custom />)
  .add('CustomIcon', () => <CustomIcon />)
  .add('Size', () => <Size />)
  .add('Position', () => <Position />);
