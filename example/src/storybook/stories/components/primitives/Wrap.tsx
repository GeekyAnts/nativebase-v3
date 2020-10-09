import React from 'react';
import { Wrap, Switch, Box } from 'native-base';

export default function () {
  return (
    <Wrap spacing={20}>
      <Switch onColor="seagreen" offColor="red" switchTrackColor="#f8d7d9" />
      <Switch />
      <Switch isEnabled switchTrackColor="#f8d7d9" />
      <Switch onColor="seagreen" offColor="blue" switchTrackColor="#f8d7d9" />
      <Box boxSize="100" bg="orange.4" />
      <Box boxSize="50" bg="black" />
      <Box w="100" h="50" bg="orange.4" />
    </Wrap>
  );
}
