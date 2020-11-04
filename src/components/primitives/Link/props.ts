import type {
  ViewStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';
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
  customTypographyProps,
} from '../../../utils/customProps';

export type ILinkProps = ColorProps &
  ViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TouchableWithoutFeedbackProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  customTypographyProps &
  BorderProps & {
    style?: ViewStyle;
    children?: string | JSX.Element | JSX.Element[] | any;
    fontSize?: string | undefined;
    href?: string | undefined;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;
    isUnderlined?: boolean | undefined;
    onClick?: any;
    isExternal?: boolean;
  };
