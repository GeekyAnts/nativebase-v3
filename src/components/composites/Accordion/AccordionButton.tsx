import React from 'react';
import { Box, ThemeContext } from '../../..';
import type {
  IAccordionButtonProps,
  IAccordionItemContextProps,
} from './props';
import { AccordionItemContext } from './AccordionItem';
import { TouchableOpacity } from 'react-native';

const AccordionButton = ({
  children,
  style,
  _expanded,
  _disabled,
  ...props
}: IAccordionButtonProps) => {
  const theme = React.useContext(ThemeContext);

  const {
    isOpen,
    isDisabled,
    onOpen,
    onClose,
  }: IAccordionItemContextProps = React.useContext(AccordionItemContext);

  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityRole="checkbox"
    >
      <Box
        p={3}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor={theme.colors.muted[2]}
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

export default AccordionButton;
