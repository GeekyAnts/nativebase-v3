import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';

import Fade from './Fade';
import ScaleFade from './ScaleFade';
import Slide from './Slide';
import SlideFade from './SlideFade';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Transitions', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Fade', () => <Fade />)
  .add('ScaleFade', () => <ScaleFade />)
  .add('Slide', () => <Slide />)
  .add('SlideFade', () => <SlideFade />);
