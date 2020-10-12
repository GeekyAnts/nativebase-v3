import React from 'react';
import { Heading, Text, View, Inline, VStack } from 'native-base';
import { select, boolean, number, color } from '@storybook/addon-knobs';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Text </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>
      <Text
        bold={boolean('bold', false)}
        italic={boolean('italic', false)}
        underline={boolean('underline', false)}
        strikeThrough={boolean('strikeThrough', false)}
        numberOfLines={number('numberOfLines', 2, {
          range: true,
          min: 1,
          max: 100,
          step: 1,
        })}
        fontSize={select(
          'Size',
          ['xs', 'sm', 'md', 'lg', 'xl', "2xl",'3xl','4xl','5xl', "6xl"],
          'xs')}
        color={color('color', 'black')}
      >
        The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      <Heading mt={3}>Simple Example</Heading>
      <Text>This is the simplest text.</Text>
      <Heading mt={3}>Nested Text</Heading>
      <Text>This is the <Text bold>nested</Text> example.</Text>
      <Heading my={3}>Different Sizes</Heading>
      <VStack space={2} alignItems="center">
        <Text fontSize="xs">Extra Small</Text>
        <Text fontSize="sm">Small</Text>
        <Text fontSize="md">Medium</Text>
        <Text fontSize="lg">Large</Text>
        <Text fontSize="xl">Extra Large</Text>
        <Text fontSize="2xl">2 Extra Large</Text>
        <Text fontSize="3xl">3 Extra Large</Text>
        <Text fontSize="4xl">4 Extra Large</Text>
        <Text fontSize="5xl">5 Extra Large</Text>
        <Text fontSize="6xl">6 Extra Large</Text>
      </VStack>
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Boolean Props </Heading>
        <Text>for easy styling</Text>
      </Inline>
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </View>
  );
}
