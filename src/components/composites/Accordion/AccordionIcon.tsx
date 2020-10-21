import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';
import { space, layout, border } from 'styled-system';
import type { IAccordionIconProps, IAccordionItemContextProps } from './props';
import { AccordionItemContext } from './AccordionItem';

const NBAccordionButton = ({ ...props }: IAccordionIconProps) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );

  return (
    <Icon
      name={isOpen ? 'chevron-small-up' : 'chevron-small-down'}
      type="Entypo"
      {...props}
    />
  );
};

const StyledAccordion = styled(NBAccordionButton)<IAccordionIconProps>(
  space,
  layout,
  border
);

const AccordionButton = ({ ...props }: IAccordionIconProps) => {
  return <StyledAccordion {...props} />;
};

export default AccordionButton;
