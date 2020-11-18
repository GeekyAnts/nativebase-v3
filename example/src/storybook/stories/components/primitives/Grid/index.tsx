import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import LayoutGrid from './layout';
import TemplateAreas from './template-areas';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Template Areas', () => <TemplateAreas />)
  .add('Layout Usage', () => <LayoutGrid />);
