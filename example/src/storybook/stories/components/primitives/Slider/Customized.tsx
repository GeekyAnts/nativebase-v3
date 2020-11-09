import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
} from 'native-base';

export default function () {
  return (
    <Slider defaultValue={70} colorScheme="purple">
      <SliderTrack bg="orange.1">
        <SliderFilledTrack bg="orange.4" />
      </SliderTrack>
      <SliderThumb>
        <Icon name="circle" type="MaterialIcons" />
      </SliderThumb>
    </Slider>
  );
}
