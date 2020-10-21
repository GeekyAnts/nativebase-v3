import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import _ from 'lodash';
import { space, layout, border } from 'styled-system';
export { default as AccordionItem } from './AccordionItem';
export { default as AccordionButton } from './AccordionButton';
export { default as AccordionPanel } from './AccordionPanel';
import type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
} from './props';
export type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
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
  // const AccordionItemIdList: any[] = [];
  // React.Children.map(children, (child) => {
  //   if (child.type.name === 'AccordionItem') {
  //     AccordionItemIdList.push(child.props.id);
  //   }
  //   console.log('kigode -', child.props.id);
  // });

  // const itemIdList: any[] = [];
  // const addItemOnIdList = (id) => {
  //   itemIdList.push(id);
  // };
  // const [index, setIndex] = React.useState([itemIdList[0]] || 0);
  const [index, setIndex] = React.useState(
    props.index || props.defaultIndex || []
  );

  // const [defaultIndex, setDefaultIndex] = React.useState(
  //   props.index || props.defaultIndex || []
  // );

  const changeHandler = (isOpening: boolean, id: number) => {
    let temp = index.map((i) => i);
    if (allowToggle) {
      if (isOpening) {
        console.log('allowToggle true opening');
        console.log('acl - ', allowMultiple);
        temp.push(id);
        allowMultiple ? setIndex(temp) : setIndex([id]);
      } else {
        console.log('allowToggle true closing');
        setIndex(index.splice(index.indexOf(id), 1));
      }
    } else {
      if (isOpening) {
        console.log('allowToggle false opening');
        temp.push(id);
        allowMultiple ? setIndex(temp) : setIndex([id]);
      } else {
        console.log('allowToggle false closing - ', temp);
        _.remove(temp, (n) => n === id);
        index.length === 1 ? setIndex([]) : setIndex(temp);
      }
    }
    onChange && onChange(temp);
  };

  return (
    <AccordionContext.Provider value={{ index: index, changeHandler }}>
      <Box style={[style]} {...props}>
        {children}
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
