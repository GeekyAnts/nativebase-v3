import type { ViewProps, ViewStyle } from 'react-native';
import type {
  customBorderProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export type IButtonProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  BorderProps & {
    style?: ViewStyle;
    children?: any;
    highlight?: number | 0 | 1 | 0.5 | 0.25 | 0.75;
    colorScheme?: string;
    variant?: string;
    isLoading?: any;
    size?: string | number;
    onClick?: any;
    shadow?: number;
    leftIcon?: JSX.Element | Array<JSX.Element>;
    rightIcon?: JSX.Element | Array<JSX.Element>;
    isLoadingText?: string;
    spinner?: JSX.Element;
    isDisabled?: boolean;
    ariaLabel?: string;
  };
