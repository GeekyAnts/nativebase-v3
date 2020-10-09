import React from 'react';
import { Button, HStack, Stack, Center, Text, Icon } from 'native-base';
import { text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Stack space={4}>
      <Center>
        <Text>Button Variants</Text>
      </Center>
      <HStack space={4}>
        <Button variant="solid" size="xs" colorScheme="green">
          Solid
        </Button>
        <Button variant="ghost" size="xs" colorScheme="green">
          Ghost
        </Button>
        <Button variant="link" size="xs" colorScheme="green">
          Link
        </Button>
        <Button variant="outline" size="xs" colorScheme="green">
          Outline
        </Button>
      </HStack>
      <Center>
        <Text>Button Sizes</Text>
      </Center>
      <HStack space={2}>
        <Button variant="solid" size="xs" colorScheme="green">
          xs-btn
        </Button>
        <Button size="sm">sm-btn</Button>
        <Button size="md" colorScheme="red">
          md-btn
        </Button>
        <Button size="lg" colorScheme="dark">
          lg-btn
        </Button>
      </HStack>
      <Center>
        <Text>Loading button</Text>
      </Center>
      <HStack space={4}>
        <Button isLoading>Button</Button>
        <Button colorScheme="warning" isLoading isLoadingText="Submitting">
          Button
        </Button>
      </HStack>
      <Center>
        <Text>Color Schemes</Text>
      </Center>
      <Button rounded={50} variant="solid" size="xs" colorScheme="green">
        Success/Green
      </Button>
      <Button variant="solid" size="xs" colorScheme="red">
        Danger/Red
      </Button>
      <Button variant="solid" size="xs" colorScheme="yellow">
        Warning/Yellow
      </Button>
      <Button variant="solid" size="xs" colorScheme="light">
        Light/White
      </Button>
      <Button variant="solid" size="xs" colorScheme="dark">
        Dark/Black
      </Button>
      <Button variant="solid" size="xs" colorScheme="muted">
        Muted/Secondary/Gray
      </Button>
      <Button variant="solid" size="xs">
        Default
      </Button>
      <Center>
        <Text>Button with icons</Text>
      </Center>
      <Button
        variant="solid"
        leftIcon={
          <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
        }
        size="xs"
        colorScheme="success"
      >
        Left Icon Button
      </Button>
      <Button
        rightIcon={
          <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
        }
        variant="solid"
        size="xs"
        colorScheme="red"
      >
        Right Icon Button
      </Button>
      <Button
        leftIcon={
          <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
        }
        rightIcon={
          <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
        }
        variant="solid"
        size="xs"
        colorScheme="yellow"
      >
        Left & Right Icon Button
      </Button>
    </Stack>
  );
}
