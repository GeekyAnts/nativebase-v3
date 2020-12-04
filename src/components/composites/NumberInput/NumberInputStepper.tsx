import React from 'react';
import { VStack, Box, Icon } from '../../primitives';
import { Divider } from '../../composites';
import { usePropsConfig } from '../../../theme';
import type { INumberInputSteppersProps } from './index';
import { TouchableOpacity } from 'react-native';

export const NBStepper = ({ children, ...props }: any) => {
  const {
    style,
    isIncrement,
    disablitityCheck,
    _active,
    _disabled,
    isDisabled,
    ariaLabel,
    pressHandler,
    ...newProps
  } = usePropsConfig('NumberInputStepper', props);
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disablitityCheck || isDisabled}
      onPress={pressHandler}
      accessible
      accessibilityLabel={ariaLabel}
    >
      <Box
        {...newProps}
        {..._active}
        {...(disablitityCheck || isDisabled ? _disabled : {})}
        style={style}
      >
        {children || isIncrement ? (
          <Icon name="arrow-drop-up" type="MaterialIcons" />
        ) : (
          <Icon name="arrow-drop-up" type="MaterialIcons" />
        )}
      </Box>
    </TouchableOpacity>
  );
};

const NumberInputStepper = ({
  children,
  ...props
}: INumberInputSteppersProps) => {
  return (
    <VStack divider={<Divider />} {...props}>
      {children}
    </VStack>
  );
};

export default NumberInputStepper;
