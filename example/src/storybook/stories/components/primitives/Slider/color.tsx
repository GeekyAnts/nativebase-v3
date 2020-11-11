import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@native-base/v3';

export default function () {
  return (
    <Box mx={5}>
      <Slider defaultValue={70} colorScheme="pink.2">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
