import type { IBoxProps } from '../../primitives';

export type ISliderProps = IBoxProps & {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  isReadOnly?: boolean;
  // TODO: need to be implemented
  // onFocus?: () => void;
  // onBlur?: () => void;
  // onMouse?: () => void;
  // orientation?: string;
  // getAriaValueText?: (value?: number) => string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaValueText?: string;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: string;
  name?: string;
  id?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isReversed?: boolean;
};
export type ISliderContextProps = {
  sliderOffset?: number;
  colorScheme?: string;
  activeColor?: string;
  barSize?: number;
  sliderSize?: number;
  thumbSize?: number;
  panResponder?: any;
  isReversed?: boolean;
};
