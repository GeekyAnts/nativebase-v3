import React from "react";
import { NBImage as Image } from "native-base";

export default function () {
  return (
    <Image
      source={{
        uri: "https://nativebase.io/assets/img/front-page-icon.png",
      }}
      boxSize={200}
      alt="Image not found"
    />
  );
}
