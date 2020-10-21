import type { IBoxProps } from 'native-base';

export type IAccordionProps = IBoxProps & {
  isLoaded?: boolean;
  startColor?: string;
  endColor?: string;
};
export type IAccordionItemProps = IAccordionProps & {
  size?: string | number;
};
export type IAccordionButtonProps = IAccordionProps & {
  noOfLines?: number;
};
export type IAccordionPanelProps = IAccordionProps & {
  noOfLines?: number;
};
