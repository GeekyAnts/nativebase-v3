import type {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from 'styled-system';
import type { TextInputProps, TextStyle } from 'react-native';
import type {
  customBorderProps,
  customExtraProps,
  customOutlineProps,
  customShadowProps,
  customLayoutProps,
  customBackgroundProps,
} from '../../../utils/customProps';

export type IInputProps = ColorProps &
  TextInputProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | JSX.Element[] | JSX.Element;
    fontSize?: number | any;
    placeholder?: string;
    isInvalid?: boolean;
    variant?: string;
    isDisabled?: boolean;
    errorMessage?: string;
    successMessage?: string;
    size?: string;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    focusBorderColor?: string;
    errorBorderColor?: string;
    errorMessageColor?: string;
    ariaLabel?: string;
    InputLeftElement?: JSX.Element | JSX.Element[];
    InputRightElement?: JSX.Element | JSX.Element[];
    type?: 'text' | 'password' | string;
  };
