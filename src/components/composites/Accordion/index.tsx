import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import _ from 'lodash';
import { space, layout, border } from 'styled-system';
export { default as AccordionItem } from './AccordionItem';
export { default as AccordionButton } from './AccordionButton';
export { default as AccordionPanel } from './AccordionPanel';
export { default as AccordionIcon } from './AccordionIcon';
import type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
} from './props';
export type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
};

export const AccordionContext = React.createContext({});

const NBAccordion = ({
  children,
  allowMultiple,
  allowToggle,
  onChange,
  style,
  ...props
}: IAccordionProps) => {
  const [index, setIndex] = React.useState(
    props.index || props.defaultIndex || []
  );
  const changeHandler = (isOpening: boolean, activeIndex: number) => {
    let temp = index.map((i) => i);
    if (allowToggle) {
      if (isOpening) {
        temp.push(activeIndex);
        allowMultiple ? setIndex(temp) : setIndex([activeIndex]);
      } else {
        setIndex(index.splice(index.indexOf(activeIndex), 1));
      }
    } else {
      if (isOpening) {
        temp.push(activeIndex);
        allowMultiple ? setIndex(temp) : setIndex([activeIndex]);
      } else {
        _.remove(temp, (n) => n === activeIndex);
        setIndex(temp);
      }
    }
    onChange && onChange(temp);
  };

  const addingIndexTOChildren = () => {
    let accordionItemCounter = -1;
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'AccordionItem') {
        // console.error('Only NativeBase Checkbox is allowed as child');
        return child;
      } else {
        accordionItemCounter++;
        return React.cloneElement(
          child,
          {
            index: accordionItemCounter,
          },
          child.props.children
        );
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ index: index, changeHandler }}>
      <Box style={[style]} {...props}>
        {addingIndexTOChildren()}
      </Box>
    </AccordionContext.Provider>
  );
};

const StyledAccordion = styled(NBAccordion)<IAccordionProps>(
  space,
  layout,
  border
);

const Accordion = ({ children, ...props }: IAccordionProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

export default Accordion;
