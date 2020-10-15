import type { SpaceProps } from 'styled-system';

export type CheckboxProps = SpaceProps & {
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
    event?: any,
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

export type CheckboxGroupProps = SpaceProps & {
  id?: string;
  value?: Array<any>;
  defaultValue?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  spacing?: string | number;
  children: JSX.Element[];
  onChange?: (values: Array<any>, event?: any) => void;
  // Custom props
  style?: any | undefined;
};
