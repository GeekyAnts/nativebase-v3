import type { IBoxProps, IFormControlContext } from 'native-base';

export type ICheckboxProps = IBoxProps & {
  id?: string;
  name?: string;
  value?: string | number;
  colorScheme?: string | 'default';
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  // isFullWidth?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
  children?: JSX.Element;
  onChange?: (
    value?: string | number | undefined,
    currentState?: boolean
  ) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  ariaLabel?: string;
  // ariaLabelledby?: string;
  // Custom Props
  style?: any | undefined;
};

export type ICheckboxGroupProps = IBoxProps & {
  id?: string;
  value?: Array<any>;
  defaultValue?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  children: JSX.Element[];
  onChange?: (values: Array<any>) => void;
  // Custom props
  style?: any | undefined;
};
export type ICheckboxContext = IFormControlContext & {
  value?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  groupValueChangeHandler?: (
    value: string | number | undefined,
    currentState: boolean
  ) => void;
};
