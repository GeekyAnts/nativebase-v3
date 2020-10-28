import type { IBoxProps } from 'native-base';

export type ISliderProps = IBoxProps & {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  main?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  isReadOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouse?: () => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaValueText?: string;
  orientation?: string;
  getAriaValueText?: (value?: number) => string;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: string;
  name?: string;
  id?: string;
  children?: React.ReactNode;
  isReversed?: boolean;
};
export type ISliderContextProps = {
  sliderOffset?: number;
  colorScheme?: string;
  barSize?: number;
  panResponder?: any;
  isReversed?: boolean;
};