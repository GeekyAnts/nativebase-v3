import type * as CSS from 'csstype';
import type { ViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customTypographyProps,
} from '../../../utils/customProps';

export type IFlexProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  customTypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    shadow?: number;
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[] | any;
    direction?: CSS.Property.FlexDirection;
    align?: CSS.Property.AlignItems;
    justify?: CSS.Property.JustifyContent;
    wrap?: CSS.Property.FlexWrap;
    basis?: CSS.Property.FlexBasis;
    grow?: CSS.Property.FlexGrow;
  };
