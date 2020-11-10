import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Example from './example';
import Size from './Size';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import Custom from './Custom';
import CloseBtn from './CloseButton';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Default Tag', () => <Example />)
  .add('Sizes', () => <Size />)
  .add('TagLeftIcon', () => <LeftIcon />)
  .add('TagRightIcon', () => <RightIcon />)
  .add('TagCloseButton', () => <CloseBtn />)
  .add('Custom Tag', () => <Custom />);
