import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import Basic from './Basic';
import { extendTheme, themeTools } from '@native-base/v3';

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props: any) => {
        return {
          color: themeTools.mode('red.3', 'blue.3')(props),
          fontWeight: 'bold',
        };
      },
    },
  },
});

storiesOf('Mode', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <Wrapper theme={customTheme}>{getStory()}</Wrapper>
  ))
  .add('Basic', () => <Basic />);
