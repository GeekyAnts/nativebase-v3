import type { SpaceType } from "./types";
import type { ViewProps, ViewStyle } from "react-native";
import type {
  customBorderProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from "../../../utils/customProps";
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";

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
    highlight?: number | undefined | 0 | 1 | 0.5 | 0.25 | 0.75;
    colorScheme?: string | undefined;
    variant?: string | undefined;
    isLoading?: any | undefined;
    size?: SpaceType | string | undefined;
    onClick?: any | undefined;
    shadow?: number | undefined;
    leftIcon?: JSX.Element | JSX.Element[] | undefined;
    rightIcon?: JSX.Element | JSX.Element[] | undefined;
    isLoadingText?: string | undefined;
    spinner?: JSX.Element | undefined;
    isDisabled?: boolean | any;
    ariaLabel?: string;
  };
