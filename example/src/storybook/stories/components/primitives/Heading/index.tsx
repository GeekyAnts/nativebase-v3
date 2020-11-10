import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Basic from './Basic';
import Sizes from './Sizes';
import Truncate from './Truncate';
import OverridenStyle from './OverridenStyle';
import Composition from './Composition';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Truncate', () => <Truncate />)
  .add('OverridenStyle', () => <OverridenStyle />)
  .add('Composition', () => <Composition />);
