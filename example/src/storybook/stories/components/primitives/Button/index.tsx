import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Box, theme, ThemeProvider } from 'native-base';
// import Button from './example';
import Usage from './usage';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {getStory()}
      </Box>
    </ThemeProvider>
  ))
  .add('Usage', () => <Usage />);
// .add('Primary', () => <Button />);
