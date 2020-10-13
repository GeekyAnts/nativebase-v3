import React from "react";
import { Heading, Spinner, View, Text, Inline } from "native-base";
import { color, select } from "@storybook/addon-knobs";

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Spinner </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>
      <Spinner
        size={select("size", ["sm", "lg"], "lg")}
        color={color("color", "blue")}
      />
      <Heading mt={3}>Simple Example</Heading>
      <Spinner />
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Different Sizes </Heading>
        <Text>with color formats</Text>
      </Inline>
      <Spinner m={2} size="sm" color="danger" />
      <Spinner m={2} size="lg" color="warning" />
    </View>
  );
}
