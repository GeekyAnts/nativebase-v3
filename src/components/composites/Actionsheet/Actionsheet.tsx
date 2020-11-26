import React from 'react';
import { Modal, ModalOverlay } from '../../composites';
import type { IActionsheetProps } from './index';
import { omitUndefined } from '../../../theme/tools/utils';

const Actionsheet = ({ children, ...props }: IActionsheetProps) => {
  const { isOpen, disableOverlay, onClose, ...newProps } = omitUndefined(props);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      justifyContent="flex-end"
      {...newProps}
    >
      {disableOverlay ? null : <ModalOverlay />}
      {children}
    </Modal>
  );
};

export default Actionsheet;
