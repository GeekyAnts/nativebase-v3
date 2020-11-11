import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Flex from './basic';
import { SpacerExample } from './spacer';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Flex', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Basic Usage', () => <Flex />)
  .add('Spacer Example', () => <SpacerExample />);
