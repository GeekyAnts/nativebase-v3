import { useButton } from '../../primitives/Button/useButton';
import type { IBoxProps } from '../../primitives';
import type { TouchableOpacityProps } from 'react-native';

type IUseAccordianButtonProps = IBoxProps & {
  isOpen?: boolean;
  isDisabled?: boolean;
  onPress?: any;
};

export function useAccordianButton({
  isOpen,
  ...restProps
}: IUseAccordianButtonProps): TouchableOpacityProps {
  const { buttonProps } = useButton({
    accessibilityState: {
      expanded: isOpen,
    },
    ...restProps,
  });

  return buttonProps;
}
