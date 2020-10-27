import type { IInputBoxProps } from 'native-base';

export type INumberInputProps = IInputBoxProps & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  keepWithinRange?: boolean;
  allowMouseWheel?: boolean;
  clampValueOnBlur?: boolean;
  focusInputOnChange?: boolean;
  getAriaValueText?: boolean;
  children?: JSX.Element[] | JSX.Element;
};

export type INumberInputFieldProps = IInputBoxProps & {};
export type INumberInputContext = INumberInputProps & {
  value?: number;
  handleChange?: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  numberInputStepper?: any;
};
