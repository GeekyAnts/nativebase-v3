import React from 'react';
import { HStack, Image } from 'native-base';
export default function () {
  return (
    <HStack alignItems="center" justifyContent="center">
      <Image
        boxSize={50}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="Segun Adebayo"
      />
      <Image
        boxSize={100}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="Dan Abramov"
      />
      <Image
        boxSize={150}
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="Dan Abramov"
      />
    </HStack>
  );
}
