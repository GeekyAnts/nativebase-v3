import { useButton } from '../../primitives/Button/useButton';
import type { IButtonProps, IBoxProps } from '../../primitives';
import type { ICollapseButtonProps } from './props';

export function useCollapseButton({
  isOpen,
  ...restProps
}: ICollapseButtonProps): IButtonProps & IBoxProps {
  const { buttonProps } = useButton({
    accessibilityState: {
      expanded: isOpen,
    },
    ...restProps,
  });

  return buttonProps;
}
