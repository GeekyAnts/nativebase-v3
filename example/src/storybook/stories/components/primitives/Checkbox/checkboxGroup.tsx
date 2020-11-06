import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Heading,
  Inline,
  Text,
  View,
} from 'native-base';

export default function () {
  const [groupValue, setGroupValue] = React.useState(['Item 1 ', 'Item 3 ']);
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>CheckboxGroup </Heading>
      </Inline>
      <CheckboxGroup
        colorScheme="green.2"
        defaultValue={groupValue}
        onChange={(values) => {
          setGroupValue(values);
        }}
      >
        <Checkbox value="Item 1 ">
          <Text mx={2}>Item 1</Text>
        </Checkbox>
        <Checkbox value="Item 2 ">
          <Text mx={2}>Item 2</Text>
        </Checkbox>
        <Checkbox value="Item 3 ">
          <Text mx={2}>Item 3</Text>
        </Checkbox>
        <Checkbox
          colorScheme="orange.3"
          isIndeterminate
          value="Indeterminate Item "
        >
          <Text mx={2}>Indeterminate Item</Text>
        </Checkbox>
      </CheckboxGroup>
      <Inline mt={3} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {groupValue}
        </Text>
      </Inline>
    </View>
  );
}
