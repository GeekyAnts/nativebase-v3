import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
} from '@native-base/v3';

export default function () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Stack mx={5} space={4} alignItems="center">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text>onChangeEndValue - {onChangeEndValue}</Text>
      <Slider
        defaultValue={70}
        colorScheme="cyan"
        onChange={(v) => {
          setOnChangeValue(Math.floor(v));
        }}
        onChangeEnd={(v) => {
          v && setOnChangeEndValue(Math.floor(v));
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Stack>
  );
}
