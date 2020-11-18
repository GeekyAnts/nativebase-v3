import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Basic from './basic';
import Wrapper from './../../Wrapper';
import LayoutGrid from './layout';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Usage', () => <Basic />)
  .add('Layout Usage', () => <LayoutGrid />);
