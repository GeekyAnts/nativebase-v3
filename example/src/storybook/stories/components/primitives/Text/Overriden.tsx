import React from 'react';
import { Text, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={2} alignItems="center">
      <Text fontSize={50}>
        I'm using a custom font-size value for this text
      </Text>
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </VStack>
  );
}
