import React from 'react';
import { ModalContent } from '../../composites';
import type { IActionsheetFooterProps } from './index';

const ActionsheetFooter = ({ children, ...props }: IActionsheetFooterProps) => {
  return (
    <ModalContent m={3} p={2} mb={6} borderRadius="lg" {...props}>
      {children}
    </ModalContent>
  );
};

export default ActionsheetFooter;
