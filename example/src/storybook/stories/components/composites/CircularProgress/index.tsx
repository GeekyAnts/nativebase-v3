import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Basic from './Basic';
import Colors from './Colors';
import Sizes from './Sizes';
import Label from './Label';
import Thickness from './Thickness';
import Indeterminate from './Indeterminate';
import TrackColor from './TrackColor';
import MinMax from './MinMax';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('CircularProgress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Colors', () => <Colors />)
  .add('Thickness', () => <Thickness />)
  .add('TrackColor', () => <TrackColor />)
  .add('Label', () => <Label />)
  .add('Min and Max', () => <MinMax />)
  .add('Indeterminate', () => <Indeterminate />);
