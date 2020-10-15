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
    boxSize?: number | undefined;
    alt?: string | undefined;
    fallbackSource?: ImageSourcePropType;
    ignoreFallback?: boolean;
  };
