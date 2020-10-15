import type { SpaceProps } from 'styled-system';

export type RadioProps = SpaceProps & {
  id?: string;
  name?: string;
  value?: string | number;
  colorScheme?: string | 'default';
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  // isFullWidth?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
  children?: JSX.Element;
  onChange?: (event?: any, value?: string | number | undefined) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  ariaLabel?: string;
  // ariaLabelledby?: string;
  // Custom Props
  style?: any | undefined;
};
export type RadioGroupProps = SpaceProps & {
  id?: string;
  value?: string | number;
  defaultValue?: string | number;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  spacing?: string | number;
  children: JSX.Element[];
  onChange?: (value: string | number, event?: any) => void;
  // Custom props
  style?: any | undefined;
};
