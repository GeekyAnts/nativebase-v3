import type { IInputProps } from 'native-base';

export type IPinInputProps = IInputProps & {
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
};

export type IPinInputFieldProps = IInputProps & {
  fieldIndex?: number;
  inputSize?: any;
};
