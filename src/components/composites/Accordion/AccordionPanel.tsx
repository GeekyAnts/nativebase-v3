import React from 'react';
import { Box } from '../../primitives';
import { useTheme } from '../../../theme';
import { AccordionItemContext } from './AccordionItem';
import Collapse from '../Collapse';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './props';

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  const theme = useTheme();
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  return (
    <Collapse isOpen={isOpen}>
      <Box
        p={3}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor={theme.colors.muted[2]}
        {...props}
      >
        {children}
      </Box>
    </Collapse>
  );
};

export default AccordionPanel;
