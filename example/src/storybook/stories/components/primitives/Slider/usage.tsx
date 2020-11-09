import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box mx={5}>
      <Slider step={10} defaultValue={70} colorScheme="cyan.1">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
