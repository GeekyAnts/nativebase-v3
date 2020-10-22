import type { IInputBoxProps } from 'native-base';

export type IPinInputProps = IInputBoxProps & {
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
};

export type IPinInputFieldProps = IInputBoxProps & {
  fieldIndex?: number;
  inputSize?: any;
};
