import type { IInputBoxProps } from 'native-base';

export type IPinInputProps = IInputBoxProps & {
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
};

export type IPinInputFieldProps = IInputBoxProps & {
  fieldIndex?: number;
  inputSize?: any;
};

export type IPinInputContext = IPinInputProps & {
  handleChange?: (value: string, index: number) => void;
  handleMultiValueChange?: (value: string) => void;
  value?: string[] | string;
  size?: string;
  defaultValue?: string[] | string;
  setRefList?: (ref: any, index: number) => void;
};
