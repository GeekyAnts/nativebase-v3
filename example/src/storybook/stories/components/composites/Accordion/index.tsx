import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Usage from './Usage';
import Playground from './Playground';
import Multiple from './Multiple';
import AccessingInternalState from './AccessingInternalState';
import ExpandedStyle from './ExpandedStyle';
import Toggle from './Toggle';
import DefaultIndex from './DefaultIndex';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Multiple', () => <Multiple />)
  .add('Default Index', () => <DefaultIndex />)
  .add('Toggle', () => <Toggle />)
  .add('Expanded Style', () => <ExpandedStyle />)

  .add('Accessing Internal State', () => <AccessingInternalState />);
