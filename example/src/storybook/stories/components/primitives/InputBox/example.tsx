import React from "react";
import { InputBox } from "native-base";

export default function () {
  return (
    <InputBox
      inputSize="lg"
      w="80%"
      colorScheme="success"
      p={3}
      variant="underlined"
      placeholder="Input text"
      successMessage="Submitted Successfully!"
    />
  );
}
