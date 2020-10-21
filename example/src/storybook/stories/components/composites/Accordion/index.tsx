import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Usage from './Usage';
import Playground from './Playground';
import Wrapper from './Wrapper';
import Color from './Color';
import Circle from './Circle';
import Text from './Text';
import Loaded from './Loaded';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Accordion', module)
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
  .add('Usage', () => <Usage />)
  .add('Wrapper', () => <Wrapper />)
  .add('Circle', () => <Circle />)
  .add('Text', () => <Text />)
  .add('Color', () => <Color />)
  .add('Loaded', () => <Loaded />);
