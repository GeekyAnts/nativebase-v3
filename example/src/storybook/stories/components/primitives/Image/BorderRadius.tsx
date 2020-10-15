import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  return (
    <Box height={200} width={200}>
      <Image
        boxSize={150}
        alt="nativebase"
        borderRadius={100}
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
      />
    </Box>
  );
}
