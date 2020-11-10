import type {
  ImageProps as RNImageProps,
  ImageSourcePropType,
} from 'react-native';
import type { ITextProps } from '@native-base/v3';
import type {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';
import type {
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';

export type IImageProps = RNImageProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customExtraProps &
  customShadowProps &
  customLayoutProps &
  PositionProps & {
    alt?: string;
    fallbackSource?: ImageSourcePropType;
    ignoreFallback?: boolean;
    textProps?: ITextProps;
  };
