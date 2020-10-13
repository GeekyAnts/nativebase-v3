import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { View, theme, ThemeProvider } from "native-base";
import Spinner from "./example";

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf("Spinner", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Primary", () => <Spinner />);
