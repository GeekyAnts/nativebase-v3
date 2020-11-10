import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import {
  DefaultLink,
  ExternalLink,
  CustomOnClick,
  StyledLink,
  CompositeLink,
} from './example';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Default Link', () => <DefaultLink />)
  .add('External Link', () => <ExternalLink />)
  .add('Underlined False Link', () => <StyledLink />)
  .add('Custom Function onPress Link', () => <CustomOnClick />)
  .add('Composite Link Example', () => <CompositeLink />);
