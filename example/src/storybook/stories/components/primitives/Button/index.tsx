import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Box, theme, NativeBaseProvider } from '@native-base/v3';
import ButtonGroup from './ButtonGroup';
import Sizes from './sizes';
import Usage from './usage';
import Variants from './variants';
import Loading from './loading';
import Icons from './icons';
import Composition from './Composition';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <Box bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </Box>
    </NativeBaseProvider>
  ))
  .add('Usage', () => <Usage />)
  .add('Sizes', () => <Sizes />)
  .add('Variants', () => <Variants />)
  .add('Loading', () => <Loading />)
  .add('Icons', () => <Icons />)
  .add('ButtonGroup', () => <ButtonGroup />)
  .add('Composition', () => <Composition />);
