import React from 'react';
import {
  Button,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
} from '@native-base/v3';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <ActionsheetItem>Option 2</ActionsheetItem>
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <Button onPress={onClose}>Cancel</Button>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
