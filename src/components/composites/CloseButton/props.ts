import type { ViewProps, ViewStyle } from 'react-native';

import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';

type SpaceType = 'sm' | 'md' | 'lg';

export type ICloseButtonProps = ViewProps &
  ColorProps &
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
    style?: ViewStyle | any;
    children?: any;
    color?: string | undefined;
    size?: SpaceType;
    isDisabled?: boolean;
    onClick?: any | undefined;
    ariaLabel?: string;
  };
