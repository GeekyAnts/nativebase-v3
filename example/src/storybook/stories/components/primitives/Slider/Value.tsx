import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
} from 'native-base';

export default function () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Stack mx={5} space={4} alignItems="center">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text>onChangeValue - {onChangeEndValue}</Text>
      <Slider
        defaultValue={70}
        colorScheme="cyan.2"
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
