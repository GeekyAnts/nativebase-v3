import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import Basic from './Basic';
import { extendTheme } from '@native-base/v3';

const theme = extendTheme({
  colors: {
    custom: {
      1: '#f7c',
      2: '#faa',
      3: '#1ac',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'custom.1',
      },
    },
  },
});

storiesOf('Custom Theme', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <Wrapper theme={theme}>{getStory()}</Wrapper>
  ))
  .add('Basic', () => <Basic />);
