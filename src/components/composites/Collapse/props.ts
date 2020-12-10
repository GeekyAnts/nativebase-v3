import type { ViewStyle } from 'react-native';
import type { IBoxProps, IButtonProps } from '../../primitives';

export type ICollapseButtonProps = IButtonProps &
  IBoxProps & {
    onPress: any;
    accessibilityLabel?: string;
    isOpen: boolean;
  };

export type ICollapseProps = IBoxProps & {
  style?: ViewStyle;
  endingHeight?: number;
  startingHeight?: number;
  duration?: number;
  animateOpacity?: boolean;
  isOpen?: boolean;
  onAnimationEnd?: Function;
  onAnimationStart?: Function;
};
