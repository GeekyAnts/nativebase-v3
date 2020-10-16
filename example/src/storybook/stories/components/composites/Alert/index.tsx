import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Playground from './knobEnabled';
// import Composition from './composition';
import Usage from './usage';
import Variant from './variant';
import Status from './status';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Alert', module)
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
  .add('Status', () => <Status />)
  .add('Variant', () => <Variant />);
// .add('Composition', () => <Composition />);
