import type { IInputBoxProps, IBoxProps } from 'native-base';

export type INumberInputProps = IInputBoxProps &
  IBoxProps & {
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

export type INumberInputFieldProps = INumberInputProps & {};
export type INumberInputContext = INumberInputProps & {
  numberInputValue?: number;
  value?: number;
  handleChange?: (value: number) => void;
  handleChangeWithoutCheck?: (value: number) => void;
  numberInputStepper?: any;
};
