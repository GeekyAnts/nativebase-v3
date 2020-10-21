import React from 'react';
import styled from 'styled-components/native';
import { Box, ThemeContext } from 'native-base';
import { space, layout, border } from 'styled-system';
import { AccordionItemContext } from './AccordionItem';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './props';
import Collapse from '../Collapse';
export type { IAccordionPanelProps };

const NBAccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
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

const StyledAccordion = styled(NBAccordionPanel)<IAccordionPanelProps>(
  space,
  layout,
  border
);
StyledAccordion.defaultProps = {};

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

export default AccordionPanel;
