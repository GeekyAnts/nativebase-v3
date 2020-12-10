import type { IButtonProps, IBoxProps } from '../../primitives';
import type { ICollapseButtonProps } from './props';

export function useCollapseButton({
  isOpen,
  ...restProps
}: ICollapseButtonProps): IButtonProps & IBoxProps {
  return {
    accessible: true,
    accessibilityState: {
      expanded: isOpen,
    },
    ...restProps,
  };
}
