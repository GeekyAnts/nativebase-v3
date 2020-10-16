import type {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import type { customBorderProps } from '../../../utils/customProps';

export type IAvatarProps = LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    name?: string | undefined;
    style?: any;
    size?: string | undefined;
    src?: string | undefined;
  };
