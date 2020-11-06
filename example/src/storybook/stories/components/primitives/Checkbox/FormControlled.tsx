import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  CheckboxGroup,
  VStack,
  Text,
  Container,
} from 'native-base';

export default function () {
  const [groupValue, setGroupValue] = React.useState(['Item 1 ', 'Item 3 ']);
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormLabel>Favorite framework</FormLabel>
        <CheckboxGroup
          colorScheme="green.2"
          defaultValue={groupValue}
          onChange={(values) => {
            setGroupValue(values);
          }}
          alignItems="flex-start"
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
        <FormHelperText>We'll keep this between us.</FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>

      <VStack mt={3} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {groupValue}
        </Text>
      </VStack>
    </Container>
  );
}
