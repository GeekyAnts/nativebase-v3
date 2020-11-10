import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Basic from './Basic';
import Spacing from './Spacing';
import AlignmentAlign from './AlignmentAlign';
import AlignmentJustify from './AlignmentJustify';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Wrap', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('Spacing', () => <Spacing />)
  .add('AlignmentAlign', () => <AlignmentAlign />)
  .add('AlignmentJustify', () => <AlignmentJustify />);
