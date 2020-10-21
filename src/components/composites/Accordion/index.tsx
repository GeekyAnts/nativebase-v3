import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space, layout, border } from 'styled-system';
export { default as AccordionItem } from './AccordionItem';
export { default as AccordionButton } from './AccordionButton';
export { default as AccordionPanel } from './AccordionPanel';
import type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
} from './props';
export type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
};

const NBAccordion = ({ children, style, ...props }: IAccordionProps) => {
  // const theme = React.useContext(ThemeContext);
  // const colorSetter = (color: string) => {
  //   if (color[0] === '#') return color;
  //   else if (color in theme.colors && theme.colors[color]) {
  //     return typeof theme.colors[color] === 'string'
  //       ? theme.colors[color]
  //       : theme.colors[color][5] || theme.colors[color][2];
  //   }
  // };
  // let accordionColor = startColor
  //   ? colorSetter(startColor)
  //   : theme.colors.muted[2];
  // let baseColor = endColor ? colorSetter(endColor) : 'transparent';

  return (
    <Box style={[style]} {...props}>
      {children}
    </Box>
  );
};

const StyledAccordion = styled(NBAccordion)<IAccordionProps>(
  space,
  layout,
  border
);
StyledAccordion.defaultProps = {
  isLoaded: false,
};

const Accordion = ({ children, ...props }: IAccordionProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

export default Accordion;
