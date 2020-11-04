import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Center,
  Input,
} from 'native-base';

export default function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('md');

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <Center>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader mt={-2} size={'2xl'}>
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="muted" mr={1}>
              Save
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        onPress={() => handleSizeClick('xs')}
        key={'xs'}
        m={4}
      >{`Open ${'xs'} Modal`}</Button>
      <Button
        onPress={() => handleSizeClick('sm')}
        key={'sm'}
        m={4}
      >{`Open ${'sm'} Modal`}</Button>
      <Button
        onPress={() => handleSizeClick('md')}
        key={'md'}
        m={4}
      >{`Open ${'md'} Modal`}</Button>
      <Button
        onPress={() => handleSizeClick('lg')}
        key={'lg'}
        m={4}
      >{`Open ${'lg'} Modal`}</Button>
      <Button
        onPress={() => handleSizeClick('xl')}
        key={'xl'}
        m={4}
      >{`Open ${'xl'} Modal`}</Button>
      <Button
        onPress={() => handleSizeClick('full')}
        key={'full'}
        m={4}
      >{`Open ${'full'} Modal`}</Button>
    </Center>
  );
}
