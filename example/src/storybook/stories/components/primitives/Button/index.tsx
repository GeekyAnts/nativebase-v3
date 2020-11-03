import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Box, theme, ThemeProvider } from 'native-base';
import ButtonGroup from './ButtonGroup';
import Sizes from './sizes';
import Usage from './usage';
import Variants from './variants';
import Loading from './loading';
import Icons from './icons';

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
  .add('Loading', () => <Loading />)
  .add('Icons', () => <Icons />)
  .add('ButtonGroup', () => <ButtonGroup />);
