import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Icon,
} from 'native-base';

export default function () {
  return (
    <Box mx={5}>
      <Slider
        step={10}
        // isReversed
        defaultValue={70}
        colorScheme="cyan.2"
        // onChange={(v) => console.log('v from usage - ', v)}
        onChangeEnd={(v) => console.log('v from usage - ', v)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb>
          <Icon name="menu" type="MaterialIcons" color="teal.2" />
        </SliderThumb>
      </Slider>
    </Box>
  );
}
