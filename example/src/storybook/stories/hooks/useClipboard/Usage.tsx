import React from 'react';
import { Button, HStack, VStack, Input, useClipboard } from '@native-base/v3';

export default function () {
  const [copyText, setCopyText] = React.useState('Copy Me');
  const [pasteText, setPasteText] = React.useState('');
  const {
    getString,
    setString,
    //  hasString, hasURL
  } = useClipboard();
  const handleCopy = () => {
    setString(copyText);
  };
  const handlePaste = async () => {
    setPasteText(await getString());
  };
  console.log('getString = ', getString());

  return (
    <VStack space={2}>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Copy From"
          onChangeText={(v) => setCopyText(v)}
          value={copyText}
        />
        <Button onPress={() => handleCopy()}>Copy</Button>
      </HStack>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Paste To"
          onChangeText={(v) => setPasteText(v)}
          value={pasteText}
        />
        <Button onPress={() => handlePaste()}>Paste</Button>
      </HStack>
    </VStack>
  );
}
