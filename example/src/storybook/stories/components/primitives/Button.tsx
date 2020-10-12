import React from 'react';
import {
  Button,
  HStack,
  Stack,
  Center,
  Text,
  Icon,
  Heading,
  ButtonGroup,
} from 'native-base';
import { text, select } from '@storybook/addon-knobs';

export default function () {
  return (
    <Stack space={4}>
      <Center>
        <Heading>Button</Heading>
        <Text>(playaround using knobs)</Text>
      </Center>
      <Center>
        <Text>Button Variants</Text>
      </Center>
      <Button
        borderColor="orange.2"
        variant={select(
          'Variants',
          ['solid', 'ghost', 'link', 'outline'],
          'solid'
        )}
        size="xs"
      >
        Button Variants
      </Button>
      <Center>
        <Text>Button Sizes </Text>
        <HStack space={2} mt={4} alignItems="center">
          <Button size="xs" colorScheme="green">
            Button
          </Button>
          <Button size="sm" colorScheme="green">
            Button
          </Button>
          <Button size="md" colorScheme="green">
            Button
          </Button>
          <Button size="lg" colorScheme="green">
            Button
          </Button>
        </HStack>
      </Center>
      <Center>
        <Text>Loading button</Text>
        <HStack space={4} mt={4}>
          <Button isLoading>Button</Button>
          <Button colorScheme="warning" isLoading isLoadingText="Submitting">
            Button
          </Button>
        </HStack>
      </Center>
      <Center>
        <Text>Color Schemes</Text>
      </Center>
      <Button
        rounded={50}
        variant="solid"
        size="xs"
        colorScheme={select(
          'colorScheme',
          [
            'green',
            'red',
            'yellow',
            'white',
            'black',
            'gray',
            'success',
            'danger',
            'error',
            'warning',
            'light',
            'dark',
            'muted',
            'secondary',
            'default',
          ],
          'green'
        )}
      >
        Success/Green
      </Button>
      <Center>
        <Text>Button with icons</Text>
      </Center>
      <HStack space={3}>
        <Button
          variant="solid"
          leftIcon={
            <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
          }
          size="xs"
          colorScheme="yellow"
        >
          Left Icon Button
        </Button>
        <Button
          isDisabled
          rightIcon={
            <Icon name={text('name', 'menu')} size={30} type="MaterialIcons" />
          }
          variant="solid"
          size="xs"
          colorScheme="red"
        >
          Right Icon Button
        </Button>
      </HStack>
      {/* <Button
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
      </Button> */}
      <Center>
        <Text>ButtonGroup with variants</Text>
      </Center>
      <Center>
        <ButtonGroup
          variant={select(
            'ButtonGroup Variants',
            ['solid', 'ghost', 'link', 'outline'],
            'solid'
          )}
          spacing={100}
        >
          <Button ariaLabel="button1 of ButtonGroup">Button 1</Button>
          <Button ariaLabel="button2 of ButtonGroup">Button 2</Button>
          <Button ariaLabel="button3 of ButtonGroup">Button 3</Button>
        </ButtonGroup>
      </Center>
    </Stack>
  );
}
