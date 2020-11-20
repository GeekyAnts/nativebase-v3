import type { IBoxProps } from '../../primitives';
import type { IFormControlContext } from '../../composites';

export type IRadioProps = IBoxProps & {
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
  onChange?: (value?: string | number) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  ariaLabel?: string;
  // ariaLabelledby?: string;
  // Custom Props
  style?: any;
};
export type IRadioGroupProps = IBoxProps & {
  id?: string;
  value?: string | number;
  defaultValue?: string | number;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onChange?: (value?: string | number) => void;
  // Custom props
  style?: any;
};
export type IRadioContext = IFormControlContext & {
  value?: string | number;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onChangeHandler?: (value: string | number) => void;
  // Custom props
  style?: any;
};
