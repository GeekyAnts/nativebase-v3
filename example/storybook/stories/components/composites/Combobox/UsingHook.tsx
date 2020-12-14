import React from 'react';
import {
  useCombobox,
  Box,
  Input,
  Button,
  Text,
  Icon,
  IconButton,
} from '@native-base/v3';

let countries = [
  'Afghanistan',
  'Australia',
  'India',
  'USA',
  'Germany',
  'France',
  'Iceland',
  'Russia',
  'Japan',
  'China',
  'Denmark',
  'Norway',
];

export function UsingHook() {
  const [inputItems, setInputItems] = React.useState(countries);

  const {
    isOpen,
    getInputProps,
    getMenuItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useCombobox({
    items: inputItems,
    itemToString: (item) => item.toString(),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        countries.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <Box flex={1} marginTop={50} width="100%" flexDirection="row">
      <Box flex={8}>
        <Input {...getInputProps()} bg="white" height={12} />
      </Box>
      <Box flex={1}>
        <IconButton
          bg="gray.300"
          {...getToggleButtonProps()}
          icon={<Icon name="arrow-drop-down" type="MaterialIcons" size={12} />}
        />
      </Box>
      <Box position="absolute" top={50} width="100%" {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <Button key={`${item}${index}`} {...getMenuItemProps(item, index)}>
              <Text>{item}</Text>
            </Button>
          ))}
      </Box>
    </Box>
  );
}
