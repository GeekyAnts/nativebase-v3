import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import Basic from './Basic';
import Spacing from './Spacing';
import AlignmentAlign from './AlignmentAlign';
import AlignmentJustify from './AlignmentJustify';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Wrap', module)
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
  .add('Basic', () => <Basic />)
  .add('Spacing', () => <Spacing />)
  .add('AlignmentAlign', () => <AlignmentAlign />)
  .add('AlignmentJustify', () => <AlignmentJustify />);