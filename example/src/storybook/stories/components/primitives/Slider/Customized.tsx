import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text,
} from '@native-base/v3';

export default function () {
  return (
    <Box mx={5}>
      <Slider defaultValue={70}>
        <SliderTrack bg="orange.1">
          <SliderFilledTrack bg="orange.4" />
        </SliderTrack>
        <SliderThumb>
          {/* TODO: icon size need to small */}
          {/* <Icon name="menu" boxSize={2} type="MaterialIcons" color="teal.2" /> */}
          <Text color="orange.4">X</Text>
        </SliderThumb>
      </Slider>
    </Box>
  );
}
