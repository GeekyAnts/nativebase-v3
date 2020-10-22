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
    <Slider defaultValue={30}>
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  );
}
