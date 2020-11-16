import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './playground';
import Disabled from './disabled';
import Usage from './usage';
import CustomColor from './customeColor';
import CustomIcon from './customeIcon';
import Size from './size';
import Invalid from './invalid';
import FormControlled from './formControlled';
import WithRef from './withRef';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />)
  .add('Size', () => <Size />)
  .add('Custom Color', () => <CustomColor />)
  .add('Custom Icon', () => <CustomIcon />)
  .add('Form Controlled', () => <FormControlled />)
  .add('With Ref', () => <WithRef />);
