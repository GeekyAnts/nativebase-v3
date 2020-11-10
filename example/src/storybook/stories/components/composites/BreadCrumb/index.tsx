import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Basic from './Basic';
import Separators from './Separators';
import ComponentSeparator from './ComponentSeparator';
import Composition from './Composition';
type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('BreadCrumb', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('Separators', () => <Separators />)
  .add('ComponentSeparator', () => <ComponentSeparator />)
  .add('Composition', () => <Composition />);
