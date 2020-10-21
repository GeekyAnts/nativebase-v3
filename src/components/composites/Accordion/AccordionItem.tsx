import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { AccordionContext } from './index';
import { space, layout, border } from 'styled-system';
import type { IAccordionItemProps, IAccordionContextProps } from './props';

export const AccordionItemContext = React.createContext({});
// TODO: tried using hooks, but feels not required
// export const useContextDefaultValue = () => {
//   const [isOpen, setIsOpen] = React.useState(true);
//   const [isDisabled, setIsDisabled] = React.useState(false);
//   const onClose = (cb?: () => void) => {
//     cb && cb();
//     setIsOpen(false);
//   };
//   const onOpen = (cb?: () => void) => {
//     cb && cb();
//     setIsOpen(true);
//   };
//   return {
//     isOpen,
//     isDisabled,
//     onClose,
//     onOpen, ;
const NBAccordionItem = ({
  children,
  isDisabled: pIsDisabled,
  ...props
}: IAccordionItemProps) => {
  const { index, changeHandler }: IAccordionContextProps = React.useContext(
    AccordionContext
  );
  const onClose = (cb?: () => void) => {
    changeHandler && changeHandler(false, props.id);
    cb && cb();
  };
  const onOpen = (cb?: () => void) => {
    changeHandler && changeHandler(true, props.id);
    cb && cb();
  };
  return (
    <AccordionItemContext.Provider
      value={{
        isOpen: index?.includes(props.id),
        isDisabled: pIsDisabled,
        onClose,
        onOpen,
      }}
    >
      <Box {...props}>{children}</Box>
    </AccordionItemContext.Provider>
  );
};

const StyledAccordion = styled(NBAccordionItem)<IAccordionItemProps>(
  space,
  layout,
  border
);
StyledAccordion.defaultProps = {};

const AccordionItem = ({ children, ...props }: IAccordionItemProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

export default AccordionItem;
