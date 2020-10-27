import React from 'react';
import { Modal as RNModal } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';

import type { IModalProps } from './props';
import { Box, Heading, CloseButton, View } from '../../..';

const StyledModal = styled(RNModal)<IModalProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const ModalContext = React.createContext({
  visible: false,
  toggleVisible: (_bool: boolean) => {},
  toggleOnClose: (_bool: boolean) => {},
  modalSize: 'lg',
});

const Modal = ({
  children,
  isOpen,
  onClose,
  isCentered,
  initialFocusRef,
  finalFocusRef,
  size,
  justifyContent,
  alignItems,
  id,
  ...props
}: IModalProps & { isOpen: boolean; onClose: any }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const value: any = {
    visible: isVisible,
    toggleVisible: setIsVisible,
    toggleOnClose: onClose,
    modalSize: size,
  };

  return (
    <ModalContext.Provider value={value}>
      <View nativeID={id}>
        <StyledModal
          visible={isVisible}
          onShow={() => {
            initialFocusRef?.current.focus();
          }}
          onDismiss={() => {
            finalFocusRef?.current.focus();
          }}
          animationType="slide"
          transparent={true}
          {...props}
        >
          <Box
            width="100%"
            height="100%"
            justifyContent={isCentered ? 'center' : justifyContent}
            alignItems={isCentered ? 'center' : alignItems}
          >
            {children}
          </Box>
        </StyledModal>
      </View>
    </ModalContext.Provider>
  );
};

export const ModalHeader = (props: any) => {
  return <Heading mb={4} pl={4} {...props} />;
};
export const ModalContent = (props: any) => {
  const { modalSize } = React.useContext(ModalContext);
  let width: string = modalSize;
  if (typeof modalSize === 'string') {
    switch (modalSize) {
      case 'xs':
        width = '40%';
        break;
      case 'sm':
        width = '48%';
        break;
      case 'md':
        width = '60%';
        break;
      case 'lg':
        width = '75%';
        break;
      case 'xl':
        width = '90%';
        break;
      case 'full':
        width = '100%';
        break;
      default:
        width = modalSize;
        break;
    }
  } else {
    width = modalSize;
  }
  return (
    <Box
      bg="gray.1"
      width={width}
      style={{ position: 'relative' }}
      {...props}
    />
  );
};
export const ModalBody = (props: any) => {
  return <Box mb={3} px={4} {...props} />;
};
export const ModalFooter = (props: any) => {
  return (
    <Box
      px={4}
      pb={4}
      flexDirection="row"
      justifyContent="flex-end"
      {...props}
    />
  );
};
export const ModalCloseButton = (props: any) => {
  const { toggleVisible, toggleOnClose } = React.useContext(ModalContext);

  return (
    <CloseButton
      size="lg"
      mr={2}
      ml="auto"
      mt={2}
      {...props}
      onClick={() => {
        toggleVisible(false);
        toggleOnClose(false);
      }}
    />
  );
};
export const ModalOverlay = ({ bg }: { bg?: string }) => {
  return (
    <Box
      style={{ position: 'absolute', left: 0, top: 0, opacity: 0.5 }}
      width="100%"
      height="100%"
      bg={bg ? bg : 'black'}
    />
  );
};
export default React.forwardRef(Modal);
export type { IModalProps };
