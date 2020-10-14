import React from 'react';
import { AspectRatio } from 'native-base';
import { Image } from 'react-native';
export default function () {
  return (
    <AspectRatio ratio={1} height={200} bg="black">
      <Image
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </AspectRatio>
  );
}
