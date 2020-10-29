import type { IBoxProps } from 'native-base';

export type IFormControlProps = IBoxProps & {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};
export type IFormControlContext = {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};
export type IFormLabelProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  _focus?: any;
  _invalid?: any;
};
export type IFormErrorMessageProps = IFormControlProps & {};
export type IFormHelperTextProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  _focus?: any;
  _invalid?: any;
};
