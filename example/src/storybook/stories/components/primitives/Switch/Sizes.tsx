import React from "react";
import { Switch, HStack } from "native-base";

export default function () {
  return (
    <HStack alignItems="center" justifyContent="center">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </HStack>
  );
}
