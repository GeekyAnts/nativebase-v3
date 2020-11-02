import type {
  ImageProps as RNImageProps,
  ImageSourcePropType,
} from 'react-native';

import type {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type { customBorderProps } from '../../../utils/customProps';

export type IImageProps = RNImageProps &
  LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    alt?: string;
    fallbackSource?: ImageSourcePropType;
    ignoreFallback?: boolean;
  };
