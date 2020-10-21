import type { ScrollViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
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

export type IListProps = ScrollViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  customTypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    spacing?: number;
    isStyled?: boolean;
    children: JSX.Element[] | JSX.Element;
  };
