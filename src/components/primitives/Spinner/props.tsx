import type { ColorProps, SpaceProps, PositionProps } from 'styled-system';

export type ISpinnerProps = ColorProps &
  SpaceProps &
  PositionProps & {
    color?: string | undefined;
    style?: any | undefined;
    show?: boolean | undefined;
    hideWhenStopped?: boolean | undefined; // IOS only
  };
