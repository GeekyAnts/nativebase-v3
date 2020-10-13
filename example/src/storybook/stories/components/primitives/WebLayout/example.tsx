import React from "react";
import { Stack, Box, Column, Columns, Text } from "native-base";
import { number } from "@storybook/addon-knobs";
export default function () {
  return (
    <Stack flexGrow={number("flexGrow", 1)}>
      <Box bg="gray.1" height={55} justifyContent="center" alignItems="center">
        <Text>Header</Text>
      </Box>
      <Columns flexGrow={number("flexGrow", 1)}>
        <Column
          bg="gray.1"
          width={0.15 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number("flexGrow", 1)}
        >
          <Text>Left Panel</Text>
        </Column>
        <Column bg="gray.1" width={0.65 / 1} flexGrow={number("flexGrow", 1)}>
          <Stack
            height={number("height", 200)}
            flexGrow={number("flexGrow", 1)}
          >
            <Box bg="gray.1" height={65} />
            <Columns flexGrow={number("flexGrow", 1)} m={30}>
              <Column
                bg="primary"
                borderRadius={number("borderRadius", 4)}
                flexGrow={number("flexGrow", 1)}
                mx={20}
              />
              <Column
                bg="green.1"
                borderRadius={number("borderRadius", 4)}
                flexGrow={number("flexGrow", 1)}
                mx={20}
              />
              <Column
                bg="green.1"
                borderRadius={number("borderRadius", 4)}
                flexGrow={number("flexGrow", 1)}
                mx={20}
              />
            </Columns>

            <Box
              bg="gray.1"
              height={number("height", 80)}
              flexGrow={number("flexGrow", 1)}
            />
          </Stack>
        </Column>
        <Column
          bg="gray.1"
          width={0.2 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number("flexGrow", 1)}
        >
          <Text>Right Panel</Text>
        </Column>
      </Columns>
    </Stack>
  );
}
