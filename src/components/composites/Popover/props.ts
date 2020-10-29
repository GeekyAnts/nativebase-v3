import type { ViewStyle } from 'react-native';
import type { Props as tooltipProps } from './Tooltip';
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
type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IPopoverProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  tooltipProps &
  BorderProps & {
    style?: ViewStyle;
    isCentered?: boolean;
    initialFocusRef?: any;
    finalFocusRef?: any;
    children: JSX.Element | JSX.Element[];
    size?: SpaceType | string | number;
    id?: any;
  };
