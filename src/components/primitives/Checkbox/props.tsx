import type { IBoxProps, IFormControlContext } from '../../..';

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
  onChange?: (value: string | number, currentState?: boolean) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  ariaLabel?: string;
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
  children: React.ReactNode;
  onChange?: (values: Array<any>) => void;
  // Custom props
  style?: any;
};
export type ICheckboxContext = IFormControlContext & {
  value?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  groupValueChangeHandler?: (
    value: string | number,
    currentState: boolean
  ) => void;
};
