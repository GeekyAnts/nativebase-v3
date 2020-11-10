import React from 'react';
import { Icon } from '@native-base/v3';
import type { IAccordionIconProps, IAccordionItemContextProps } from './props';
import { AccordionItemContext } from './AccordionItem';

const AccordionButton = ({ ...props }: IAccordionIconProps) => {
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

export default AccordionButton;
