import React from 'react';
import { Box } from '../../primitives';
import { useToken } from '../../../theme';
import { AccordionItemContext } from './AccordionItem';
import Collapse from '../Collapse';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './props';

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  const borderColor = useToken('colors', 'muted.200');
  return (
    <Collapse isOpen={isOpen}>
      <Box
        p={3}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor={borderColor}
        {...props}
      >
        {children}
      </Box>
    </Collapse>
  );
};

export default AccordionPanel;
