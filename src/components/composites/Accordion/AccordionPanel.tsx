import React from 'react';
import styled from 'styled-components/native';
import { Box, Text } from 'native-base';
import { Animated, TouchableOpacity } from 'react-native';
import { space, layout, border } from 'styled-system';
import { accordionItemContext, useAccordianAnimation } from './AccordionItem';
import type { IAccordionPanelProps } from './props';
export type { IAccordionPanelProps };

const NBAccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  // TODO: move panelAnim to context of AccordionItem as it'll be used but both child
  const [panelAnim, growAnimation, shrinkAnimation] = useAccordianAnimation();
  // const context = React.useContext(accordionItemContext);
  const accordionStyle = {
    panelAnimation: {
      // height: panelAnim, // Bind height to animated value
      height: panelAnim, // Bind height to animated value
    },
  };

  return (
    <>
      <TouchableOpacity
        // activeOpacity={1}
        // disabled={isDisabled}
        // style={[baseStyle.checkboxWrapper, style]}
        onPress={(event) => {
          shrinkAnimation();
        }}
        accessible={true}
        // accessibilityLabel={ariaLabel}
        accessibilityRole="checkbox"
      >
        <Text>sdasds</Text>
      </TouchableOpacity>
      <Animated.View style={[accordionStyle.panelAnimation]}>
        <Box {...props}>{children}</Box>
      </Animated.View>
    </>
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
