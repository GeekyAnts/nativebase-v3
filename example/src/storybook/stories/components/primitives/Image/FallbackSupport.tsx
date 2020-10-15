import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box height={200} width={200}>
      <Image
        boxSize={150}
        alt="nativebase"
        source={{
          uri: 'https://-page-icon.png',
          // uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
      />
    </Box>
  );
}
