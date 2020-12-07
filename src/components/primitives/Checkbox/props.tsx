import type { IBoxProps } from '../../primitives';
import type { IFormControlContext } from '../../composites';

export type ICheckboxValue = string | number;

export type ICheckboxProps = IBoxProps & {
  id?: string;
  name?: string;
  value: ICheckboxValue;
  colorScheme?: string | 'default';
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  // isFullWidth?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
  onChange?: (value: ICheckboxValue, currentState: boolean) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  // ariaLabelledby?: string;
  // Custom Props
  style?: any;
};

export type ICheckboxGroupProps = IBoxProps & {
  id?: string;
  value?: Array<any>;
  defaultValue?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (values: Array<any>) => void;
  // Custom props
  style?: any;
};
export type ICheckboxContext = IFormControlContext & {
  value?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: ICheckboxValue, currentState: boolean) => void;
};
