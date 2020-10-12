import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from 'native-base';
import {
  Box,
  Columns,
  Flex,
  HStack,
  Icon,
  Image,
  InputBox,
  Spinner,
  Stack,
  Switch,
  VStack,
  Wrap,
  ZStack,
  // Composites
  Alert,
  AppBar,
  AspectRatioBox,
  Avatar,
  Badge,
  Breadcrumb,
  WebLayout,
  Button,
  Center,
  CloseButton,
  Code,
  Divider,
  IconButton,
  Kbd,
  Progress,
  Stat,
  Tag,
  TextArea,
  Text,
} from './components';

type GetStory = () => JSX.Element | JSX.Element[] | any;
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#7c83db',
  },
};
storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={customTheme}>
      <View
        flexGrow={1}
        bg="white"
        alignItems="center"
        p={3}
        justifyContent="center"
      >
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Text', () => <Text />)
  .add('Box', () => <Box />)
  .add('Columns', () => <Columns />)
  .add('Flex', () => <Flex />)
  .add('HStack', () => <HStack />)
  .add('Icon', () => <Icon />)
  .add('Image', () => <Image />)
  .add('InputBox', () => <InputBox />)
  .add('Spinner', () => <Spinner />)
  .add('Stack', () => <Stack />)
  .add('Switch', () => <Switch />)
  .add('Button', () => <Button />)
  .add('VStack', () => <VStack />)
  .add('Web Layout', () => <WebLayout />)
  .add('Wrap', () => <Wrap />)
  .add('ZStack', () => <ZStack />);

storiesOf('Composites', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="white">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Alert', () => <Alert />)
  .add('AppBar', () => <AppBar />)
  .add('AspectRatioBox', () => <AspectRatioBox />)
  .add('Avatar', () => <Avatar />)
  .add('Badge', () => <Badge />)
  .add('Breadcrumb', () => <Breadcrumb />)
  .add('Center', () => <Center />)
  .add('CloseButton', () => <CloseButton />)
  .add('Code', () => <Code />)
  .add('Divider', () => <Divider />)
  .add('IconButton', () => <IconButton />)
  .add('KBD', () => <Kbd />)
  .add('Progress', () => <Progress />)
  .add('Stat', () => <Stat />)
  .add('Tag', () => <Tag />)
  .add('TextArea', () => <TextArea />);
