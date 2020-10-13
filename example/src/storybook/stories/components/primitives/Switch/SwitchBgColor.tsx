import React from "react";
import { Switch, HStack } from "native-base";

export default function () {
  return (
    <HStack alignItems="center" justifyContent="center">
      <Switch colorScheme="red" />
      <Switch colorScheme="teal.2" size="lg" />
    </HStack>
  );
}
