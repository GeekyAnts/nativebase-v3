import type { IInputProps } from '../../..';

export type IPinInputProps = IInputProps & {
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
};

export type IPinInputFieldProps = IInputProps & {
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
