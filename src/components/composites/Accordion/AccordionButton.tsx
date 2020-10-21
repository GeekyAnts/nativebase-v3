import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space, layout, border } from 'styled-system';
import type { IAccordionButtonProps } from './props';
import { accordionItemContext, useAccordianAnimation } from './AccordionItem';

import { TouchableOpacity } from 'react-native';
export type { IAccordionButtonProps };

const NBAccordionButton = ({ children, ...props }: IAccordionButtonProps) => {
  const [panelAnim, growAnimation, shrinkAnimation] = useAccordianAnimation();

  const pressHandler = (event: any) => {
    shrinkAnimation();
    console.log('panelAnim - ', panelAnim);

    // console.log(event);
  };

  return (
    <TouchableOpacity
      // activeOpacity={1}
      // disabled={isDisabled}
      // style={[baseStyle.checkboxWrapper, style]}
      onPress={(event) => pressHandler(event)}
      accessible={true}
      // accessibilityLabel={ariaLabel}
      accessibilityRole="checkbox"
    >
      <Box
        bg="#ddd"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...props}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

const StyledAccordion = styled(NBAccordionButton)<IAccordionButtonProps>(
  space,
  layout,
  border
);
StyledAccordion.defaultProps = {};

const AccordionButton = ({ children, ...props }: IAccordionButtonProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

export default AccordionButton;
