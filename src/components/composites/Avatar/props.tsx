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
    name?: string;
    style?: any;
    size?: string;
    src?: string;
    children?: JSX.Element[] | JSX.Element | any;
  };

export type IAvatarBadgeProps = IAvatarProps & {
  bg?: string;
  boxSize?: number;
  borderColor?: string;
};
