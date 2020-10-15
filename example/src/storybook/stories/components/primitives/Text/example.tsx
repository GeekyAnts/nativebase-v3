import React from 'react';
import { Heading, Text, View, Inline } from 'native-base';
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
        noOfLines={number('numberOfLines', 2, {
          range: true,
          min: 1,
          max: 100,
          step: 1,
        })}
        fontSize={select(
          'Size',
          ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
          'xs'
        )}
        color={color('color', 'black')}
      >
        The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      <Heading mt={3}>Simple Example</Heading>
      <Text>This is the simplest text.</Text>
      <Heading mt={3}>Nested Text</Heading>
      <Text>
        This is the <Text bold>nested</Text> example.
      </Text>
    </View>
  );
}
