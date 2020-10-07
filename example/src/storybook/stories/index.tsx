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
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Flex,
  Switch,
  Wrap,
  Divider,
  Kbd,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  TextArea,
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
      <AlertHeading>Alert Heading</AlertHeading>
    </Alert>
  ))
  .add('Spinner', () => <Spinner size="large" color="#ea6989" />)
  .add('Switch', () => (
    <Switch
      size={2}
      onColor="seagreen"
      offColor="red"
      switchTrackColor="#f8d7d9"
    />
  ))
  .add('Wrap', () => (
    <Wrap spacing={20}>
      <Switch onColor="seagreen" offColor="red" switchTrackColor="#f8d7d9" />
      <Switch />
      <Switch isEnabled switchTrackColor="#f8d7d9" />
      <Switch onColor="seagreen" offColor="blue" switchTrackColor="#f8d7d9" />
      <Box boxSize="100" bg="orange" />
      <Box boxSize="50" bg="black" />
      <Box w="100" h="50" bg="orange" />
    </Wrap>
  ))
  .add('Image', () => (
    <NBImage
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      boxSize={200}
      alt="Image not found"
    />
  ))
  .add('Flex', () => (
    <Flex>
      <Text>Test Text1 </Text>
      <Text>/ </Text>
      <Text>Testing this text with Flex</Text>
    </Flex>
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
      <Box bg="gray" height={55} justifyContent="center" alignItems="center">
        <Text>Header</Text>
      </Box>
      <Columns flexGrow={number('flexGrow', 1)}>
        <Column
          bg="gray"
          width={0.15 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number('flexGrow', 1)}
        >
          <Text>Left Panel</Text>
        </Column>
        <Column bg="gray" width={0.65 / 1} flexGrow={number('flexGrow', 1)}>
          <Stack
            height={number('height', 200)}
            flexGrow={number('flexGrow', 1)}
          >
            <Box bg="gray" height={65} />
            <Columns flexGrow={number('flexGrow', 1)} m={30}>
              <Column
                bg="green"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Column
                bg="green"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Column
                bg="green"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
            </Columns>

            <Box
              bg="gray"
              height={number('height', 80)}
              flexGrow={number('flexGrow', 1)}
            />
          </Stack>
        </Column>
        <Column
          bg="gray"
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
    <Box height={70} shadow={5} width={[1, 1 / 2, 1 / 4]} bg="orange" />
  ))
  .add('Columns', () => (
    <Columns
      space={number('space', 3)}
      height={number('height', 100)}
      mb={number('mb', 3)}
    >
      <Column
        borderRadius={number('borderRadius', 4)}
        flexGrow={number('flexGrow', 1)}
        bg="green"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        width={1 / 2.5}
        bg="pink"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        flexGrow={number('flexGrow', 1.5)}
        bg="indigo"
      />
    </Columns>
  ))
  .add('Stack', () => (
    <Stack space={number('space', 3)} mb={number('mb', 3)}>
      <Box borderRadius={4} height={70} width={70} bg="blue" />
      <Box borderRadius={4} height={70} width={70} bg="purple" />
      <Box borderRadius={4} height={70} width={70} bg="yellow" />
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
    <AspectRatioBox ratio={4 / 3} height="300px" bg="black"></AspectRatioBox>
  ))
  .add('KBD', () => (
    <Flex>
      <Kbd>Shift</Kbd>
      <Text pt={1}> + </Text>
      <Kbd>C</Kbd>
    </Flex>
  ))
  .add('Divider', () => (
    <Flex>
      <Text>Verical</Text>
      <Divider mx={2} dividerColor="grey" orientation="vertical" />
      <Text>Divider</Text>
    </Flex>
  ))
  .add('Progress', () => (
    <Box>
      <Progress bg="pink" size="md" mb={2} colorScheme="green" value={45} />
      <Progress rounded="50" size="lg" colorScheme="red" mb={2} value={65} />
      <Progress size="xl" colorScheme="warning" value={85} />
    </Box>
  ))
  .add('Stat', () => (
    <Stat>
      <StatLabel>This is Stat</StatLabel>
      <StatNumber>28%</StatNumber>
      <StatHelpText>Help Text</StatHelpText>
    </Stat>
  ))
  .add('Tag', () => (
    <Tag variant="green" variantType="solid" tagSize="2xl">
      asfaskjl
    </Tag>
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
  .add('Button', () => (
    <Button shadow={6} colorScheme="danger">
      Press Me
    </Button>
  ))

  .add('Badge', () => (
    <Badge variant="success" variantType="solid">
      NativeBase Badge
    </Badge>
  ))
  .add('CloseButton', () => <CloseButton color="green" highlight={0.9} />)
  .add('TextArea', () => (
    <TextArea totalLines={5} p={2} mt={3} placeholder="placeholder"></TextArea>
  ))
  .add('BreadCrumb', () => (
    <BreadCrumb separator="|">
      <BreadCrumbItem>
        <BreadCrumbLink IsUnderlined={false} href="https://google.com">
          Google
        </BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbLink href="https://google.com">Google</BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbLink href="https://google.com">Google</BreadCrumbLink>
      </BreadCrumbItem>
    </BreadCrumb>
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
      bg={color('bg', 'blue')}
    />
  ))
  .add('IconButton', () => (
    <IconButton
      type="MaterialIcons"
      name={text('name', 'menu')}
      bg={text('bg', 'blue')}
    />
  ));
