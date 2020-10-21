import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Box } from 'native-base';
import { space, layout, border } from 'styled-system';
import type { IAccordionItemProps } from './props';
export type { IAccordionItemProps };

export const accordionItemContext = React.createContext({});
export const useAccordianAnimation = () => {
  const panelAnim = React.useRef(new Animated.Value(1)).current;
  const bodyHeight = panelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const growAnimation = () => {
    Animated.timing(panelAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const shrinkAnimation = () => {
    console.log('shrinking - ', panelAnim);

    Animated.timing(panelAnim, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    console.log('shrinking done - ', panelAnim);
  };
  return [bodyHeight, growAnimation, shrinkAnimation];
};

const NBAccordionItem = ({ children, ...props }: IAccordionItemProps) => {
  return (
    <accordionItemContext.Provider
      value={{
        useAccordianAnimation,
        isOpen: false,
        isDisabled: false,
        onClose: false,
        onOpen: false,
      }}
    >
      <Box {...props}>{children}</Box>
    </accordionItemContext.Provider>
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
