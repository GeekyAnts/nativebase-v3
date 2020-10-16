import React from "react";
import { Icon } from "native-base";
import { text } from "@storybook/addon-knobs";

export default function () {
  return <Icon name={text("name", "menu")} type="MaterialIcons" />;
}
