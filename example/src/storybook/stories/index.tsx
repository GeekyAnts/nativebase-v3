import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react-native';
import { color, number, select, text, withKnobs } from '@storybook/addon-knobs';
import {
  AppBar,
  Alert,
  AlertHeading,
  AspectRatioBox,
  Avatar,
  AvatarBadge,
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
  theme,
  Spinner,
  NBImage,
  Center,
  Select,
} from 'native-base';

type GetStory = () => JSX.Element | JSX.Element[] | any;

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
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
  .add('Alert', () => (
    <Alert variant="solid" status="success">
      <AlertHeading>Alert Heading</AlertHeading>This is an NativeBase Alert
    </Alert>
  ))
  .add('Spinner', () => <Spinner size="large" color="#ea6989" />)
  .add('Image', () => (
    <NBImage
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      boxSize={200}
      alt="Image not found"
    />
  ))
  .add('Select', () => (
    <>
      <Text>Label: </Text>
      <Select
        initValue="js"
        options={[
          { label: 'Java', value: 'java' },
          { label: 'JavaScript', value: 'js' },
          { label: 'Vue', value: 'vue' },
          { label: 'Flutter', value: 'flutter' },
          { label: 'React', value: 'react' },
          { label: 'React Native', value: 'reactnative' },
        ]}
      />
    </>
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
  .add('Box', () => <Box height={70} width={[1, 1 / 2, 1 / 4]} bg="orange" />)
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
    <ThemeProvider theme={theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="white">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('AspectRatioBox', () => (
    <AspectRatioBox ratio={4 / 3} height="300px" bg="black" />
  ))
  .add('Avatar', () => (
    <Avatar
      avatarSize={100}
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      //Uncomment next line to get initials when the source is wrong or broken
      //name="Native Base"
    >
      <AvatarBadge boxSize={13} badgeColor="seagreen" />
    </Avatar>
  ))
  .add('Button', () => <Button colorScheme="danger">Press Me</Button>)

  .add('Badge', () => (
    <Badge variant="success" variantType="solid">
      NativeBase Badge
    </Badge>
  ))
  .add('AppBar', () => (
    <AppBar
      leading={
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
  .add('Center', () => (
    <Center>
      <Box bg="red" boxSize="100" />
    </Center>
  ))
  .add('IconButton', () => (
    <IconButton
      type="MaterialIcons"
      name={text('name', 'menu')}
      bg={text('bg', 'blue.5')}
    />
  ));
