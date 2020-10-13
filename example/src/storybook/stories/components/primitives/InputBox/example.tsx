import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Box,
  Text,
  Center,
  Heading,
  Button,
} from 'native-base';

export const DefaultInput = () => {
  return <Input p={3} w="90%" placeholder="Default Input Box" />;
};
export const SizeInput = () => {
  return (
    <Stack space={4}>
      <Center>
        <Heading>Size Input</Heading>
      </Center>
      <Input p={3} w="60%" inputSize="xsm" placeholder="xsm Input" />
      <Input p={3} w="60%" inputSize="sm" placeholder="sm Input" />
      <Input p={3} w="60%" inputSize="md" placeholder="md Input" />
      <Input p={3} w="60%" inputSize="lg" placeholder="lg Input" />
      <Input p={3} w="60%" inputSize="xl" placeholder="xl Input" />
      <Input p={3} w="60%" inputSize="2xl" placeholder="2xl Input" />
    </Stack>
  );
};
export const VariantInput = () => {
  return (
    <Stack space={4}>
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input p={3} variant="outline" placeholder="Outline" />
      <Input p={3} variant="filled" placeholder="Filled" />
      <Input p={3} variant="underlined" placeholder="Underlined" />
      <Input p={3} variant="unstyled" placeholder="Unstyled" />
      <Input p={3} variant="rounded" placeholder="round" />
    </Stack>
  );
};
export const InputAddons = () => {
  return (
    <Stack space={4}>
      <InputGroup>
        <InputLeftAddon children={<Text>https://</Text>} />
        <Input p={3} width={200} placeholder="nativebase" />
        <InputRightAddon children={<Text>.io</Text>} />
      </InputGroup>
    </Stack>
  );
};
export const InputELements = () => {
  return (
    <Input
      width="250"
      p={3}
      InputLeftElement={<Box bg="black" width="20" height="20" />}
      InputRightElement={<Box bg="black" width="20" height="20" />}
      placeholder="Left and Right InputElement"
    />
  );
};
export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      w="70%"
      p={3}
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button ml={1} onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};
export const ControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      p={3}
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
export const FocusErrorBorderColor = () => {
  return (
    <Stack space={4}>
      <Input
        p={3}
        placeholder="Here is a sample placeholder"
        focusBorderColor="green"
      />
      <Input
        p={3}
        placeholder="Here is a sample placeholder"
        focusBorderColor="pink"
      />
      <Input p={3} placeholder="Here is a sample placeholder" isInvalid />
      <Input
        p={3}
        placeholder="Here is a sample placeholder"
        isInvalid
        errorBorderColor="yellow"
        errorMessage="This is an Error Message"
      />
    </Stack>
  );
};
