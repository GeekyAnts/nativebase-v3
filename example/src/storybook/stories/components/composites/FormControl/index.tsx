import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './Usage';
import CustomStyle from './CustomStyle';
// import DefaultValue from './DefaultValue';
import Playground from './Playground';
// import MinMax from './MinMax';

storiesOf('FormControl', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  // .add('DefaultValue', () => <DefaultValue />)
  // .add('MinMax', () => <MinMax />)
  .add('CustomStyle', () => <CustomStyle />);
