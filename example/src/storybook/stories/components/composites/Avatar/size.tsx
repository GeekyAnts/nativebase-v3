import React from 'react';
import { Avatar, HStack, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <HStack>
        <Avatar
          mr={1}
          size="xs"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Avatar
          mr={1}
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <Avatar
          mr={1}
          size="md"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
        <Avatar
          mr={1}
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <Avatar
          mr={1}
          size="xl"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
        />
        <Avatar
          mr={1}
          size="2xl"
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />
      </HStack>
    </View>
  );
}
