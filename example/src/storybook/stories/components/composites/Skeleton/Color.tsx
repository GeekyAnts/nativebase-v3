import React from 'react';
import { Skeleton, Stack } from 'native-base';
export default function () {
  return (
    <Stack width="90%">
      <Skeleton my={2} startColor="pink" endColor="orange" height="20px" />
      <Skeleton my={2} startColor="gray" endColor="#0dead0" height="20px" />
      <Skeleton my={2} startColor="success" endColor="danger" height="20px" />
    </Stack>
  );
}
