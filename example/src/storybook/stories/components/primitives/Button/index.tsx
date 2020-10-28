import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Box, theme, ThemeProvider } from 'native-base';
import Button from './example';
import Sizes from './sizes';
import Usage from './usage';
import Variants from './variants';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <Box flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </Box>
    </ThemeProvider>
  ))
  .add('Usage', () => <Usage />)
  .add('Sizes', () => <Sizes />)
  .add('Variants', () => <Variants />)
  .add('Example', () => <Button />);
