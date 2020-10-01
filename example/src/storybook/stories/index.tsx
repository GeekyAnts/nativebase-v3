import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react-native';
import {
  boolean,
  color,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Box,
  Column,
  Columns,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  View,
  ZStack,
  Theme,
} from 'native-base';

type GetStory = () => JSX.Element | JSX.Element[];

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
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
  .add('VStack', () => (
    <VStack space={8}>
      <Text>Test Text</Text>
      <Text>Testing this text with Stacks</Text>
    </VStack>
  ))
  .add('HStack', () => (
    <HStack space={8}>
      <Text>Test Text</Text>
      <Text>Testing this text with HStacks</Text>
    </HStack>
  ))
  .add('ZStack', () => (
    <ZStack>
      <Text>Test Text</Text>
      <Text>Testing this text with ZStacks</Text>
    </ZStack>
  ))
  .add('Web Layout', () => (
    <Stack flexGrow={number('flexGrow', 1)}>
      <Box bg="gray.3" height={55} justifyContent="center" alignItems="center">
        <Text>Header</Text>
      </Box>
      <Columns flexGrow={number('flexGrow', 1)}>
        <Column
          bg="gray.1"
          width={0.15 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number('flexGrow', 1)}
        >
          <Text>Left Panel</Text>
        </Column>
        <Column bg="gray.2" width={0.65 / 1} flexGrow={number('flexGrow', 1)}>
          <Stack
            height={number('height', 200)}
            flexGrow={number('flexGrow', 1)}
          >
            <Box bg="gray.5" height={65} />
            <Columns flexGrow={number('flexGrow', 1)} m={30}>
              <Column
                bg="green.2"
                borderRadius={number('borderRadius', 4)}
                shadow={number('shadow', 1)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Column
                bg="green.2"
                borderRadius={number('borderRadius', 4)}
                shadow={number('shadow', 1)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Column
                bg="green.2"
                borderRadius={number('borderRadius', 4)}
                shadow={number('shadow', 1)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
            </Columns>

            <Box
              bg="gray.4"
              height={number('height', 80)}
              flexGrow={number('flexGrow', 1)}
            />
          </Stack>
        </Column>
        <Column
          bg="gray.1"
          width={0.2 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number('flexGrow', 1)}
        >
          <Text>Right Panel</Text>
        </Column>
      </Columns>
    </Stack>
  ))
  .add('Box', () => (
    <Box
      height={70}
      width={[1, 1 / 2, 1 / 4]}
      bg="orange"
    />
  ))
  .add('Columns', () => (
    <Columns
      space={number('space', 3)}
      height={number('height', 100)}
      mb={number('mb', 3)}
    >
      <Column
        borderRadius={number('borderRadius', 4)}
        shadow={number('shadow', 1)}
        flexGrow={number('flexGrow', 1)}
        bg="green.5"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        shadow={number('shadow', 1)}
        width={1 / 2.5}
        bg="pink.3"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        shadow={number('shadow', 1)}
        flexGrow={number('flexGrow', 1.5)}
        bg="indigo.8"
      />
    </Columns>
  ))
  .add('Stack', () => (
    <Stack space={number('space', 3)} mb={number('mb', 3)}>
      <Box
        borderRadius={number('borderRadius', 4)}
        height={number('height', 70)}
        shadow={number('shadow', 1)}
        bg="blue.3"
      />
      <Box
        borderRadius={number('borderRadius', 4)}
        shadow={number('shadow', 1)}
        height={number('height', 70)}
        bg="purple.5"
      />
      <Box
        borderRadius={number('borderRadius', 4)}
        shadow={number('shadow', 1)}
        height={number('height', 70)}
        bg="yellow.4"
      />
    </Stack>
  ))
  .add('Icon', () => <Icon name={text('name', 'menu')} type="MaterialIcons" />);

storiesOf('Composites', module)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="white">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Button', () => <Button rounded={50} colorScheme="danger">Press Me</Button>)

  .add('Badge', () => (
    <Badge variant="success" variantType="solid">NativeBase Badge</Badge>
  ))
  .add('AppBar', () => (
    <AppBar
      leading={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <IconButton
          name={select(
            'icon',
            {
              menu: 'menu',
              account: 'account-circle',
              back: 'arrow-back',
              home: 'home',
            },
            'menu'
          )}
          type="MaterialIcons"
        />
      }
      title={<Text>{text('title', 'Header')}</Text>}
      actions={[
        <IconButton key="chat" name="chat" type="MaterialIcons" />,
        <IconButton key="favourite" name="favorite" type="MaterialIcons" />,
        <IconButton key="loop" name="loop" type="MaterialIcons" />,
      ]}
      bg={color('bg', 'blue.6')}
    />
  ))
  .add('IconButton', () => (
    <IconButton
      type="MaterialIcons"
      name={text('name', 'menu')}
      bg={text('bg', 'blue.5')}
    />
  ));
