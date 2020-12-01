import React from 'react';
import { Box } from '../../primitives';
import { useToken } from '../../../theme';
import type {
  IAccordionButtonProps,
  IAccordionItemContextProps,
} from './props';
import { AccordionItemContext } from './AccordionItem';
import { TouchableOpacity } from 'react-native';

const AccordionButton = (
  { children, style, _expanded, _disabled, ...props }: IAccordionButtonProps,
  ref: any
) => {
  const {
    isOpen,
    isDisabled,
    onOpen,
    onClose,
  }: IAccordionItemContextProps = React.useContext(AccordionItemContext);

  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };
  const borderColor = useToken('colors', 'muted.200');
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityRole="checkbox"
      ref={ref}
    >
      <Box
        p={3}
        borderColor={borderColor}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...props}
        style={[style, isOpen && _expanded, isDisabled && _disabled]}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, IAccordionButtonProps>(
  AccordionButton
);
