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

import type { IBoxProps, ITextProps, IFlexProps } from '../../primitives';

export type IBreadCrumbProps = IBoxProps &
  IFlexProps &
  ITextProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    spacing?: number;
    separator?: string | JSX.Element | JSX.Element[];
  };
export type ITextProps = ViewProps &
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
    style?: ViewStyle;
    children?: string;
  };
