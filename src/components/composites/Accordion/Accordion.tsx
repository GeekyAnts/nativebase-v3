import React from 'react';
import { remove } from 'lodash';
import { Box } from '../../primitives';
import type { IAccordionProps } from './props';

export const AccordionContext = React.createContext({});

const Accordion = ({
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
    let indexCopy = index.map((i) => i);
    if (allowToggle) {
      if (isOpening) {
        indexCopy.push(activeIndex);
        allowMultiple ? setIndex(indexCopy) : setIndex([activeIndex]);
      } else {
        setIndex(index.splice(index.indexOf(activeIndex), 1));
      }
    } else {
      if (isOpening) {
        indexCopy.push(activeIndex);
        allowMultiple ? setIndex(indexCopy) : setIndex([activeIndex]);
      } else {
        remove(indexCopy, (n) => n === activeIndex);
        setIndex(indexCopy);
      }
    }
    onChange && onChange(indexCopy);
  };

  const addingIndexToChildren = () => {
    let accordionItemCounter = -1;
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'AccordionItem') {
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
      <Box style={style} {...props}>
        {addingIndexToChildren()}
      </Box>
    </AccordionContext.Provider>
  );
};

export default Accordion;
