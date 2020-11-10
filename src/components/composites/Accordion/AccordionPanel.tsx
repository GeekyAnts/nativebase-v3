import React from 'react';
import { Box, ThemeContext } from 'native-base';
import { AccordionItemContext } from './AccordionItem';
import Collapse from '../Collapse';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './props';

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  const theme = React.useContext(ThemeContext);
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
