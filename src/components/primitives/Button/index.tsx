import React, { forwardRef, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { usePropsConfig, Text } from 'native-base';
import { Spinner, Box, IBoxProps, Flex } from '../../primitives';
import type { IButtonProps } from './IButtonProps';
import { ButtonGroupContext } from './ButtonGroup';
const StyledView = styled(View)<
  IButtonProps & {
    colorScheme?: string | undefined;
    variant?: string | undefined;
  }
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const StyledAndroidButton = styled(TouchableNativeFeedback)<
  IButtonProps & TouchableNativeFeedbackProps
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const StyledIOSButton = styled(TouchableOpacity)<
  IButtonProps & TouchableOpacityProps
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const Button = (allProps: IButtonProps & IBoxProps, ref: any) => {
  let buttonGroupProps = useContext(ButtonGroupContext);
  if (buttonGroupProps) {
    allProps = { ...buttonGroupProps, ...allProps };
  }
  let {
    style,
    children,
    highlight,
    isLoading,
    isLoadingText,
    size,
    onClick,
    leftIcon,
    rightIcon,
    isDisabled,
    spinner,
    ariaLabel,
    ...props
  } = allProps;

  const newProps = usePropsConfig('Button', {
    ...props,
    size,
  });
  let {
    fontWeight,
    fontSize,
    lineHeight,
    textDecorationLine,
    color,
    ...viewProps
  } = newProps;
  const textProps = {
    fontWeight,
    fontSize,
    // lineHeight,
    textDecorationLine,
    color,
  };
  const innerButton = (
    <StyledView {...viewProps} opacity={isLoading ? 0.5 : 1} style={style}>
      {leftIcon ? <Box mr={viewProps.px / 2 || 2}>{leftIcon}</Box> : null}
      {isLoading ? (
        <Flex direction="row">
          {spinner ? spinner : <Spinner color={textProps.color} size="sm" />}
          <Text {...textProps}>{isLoadingText ? ' ' + isLoadingText : ''}</Text>
        </Flex>
      ) : (
        <Text
          {...textProps}
          style={{ textDecorationLine: textProps.textDecorationLine }}
        >
          {children}
        </Text>
      )}
      {rightIcon ? <Box ml={viewProps.px / 2 || 2}>{rightIcon}</Box> : null}
    </StyledView>
  );

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    return (
      <Box {...props} style={style}>
        <StyledAndroidButton
          accessible
          accessibilityLabel={ariaLabel}
          accessibilityRole="button"
          disabled={isLoading || isDisabled}
          onPress={onClick ? onClick : () => {}}
          background={TouchableNativeFeedback.Ripple(textProps.color, false)}
          ref={ref}
          {...props}
        >
          {innerButton}
        </StyledAndroidButton>
      </Box>
    );
  } else {
    return (
      <StyledIOSButton
        accessible
        accessibilityLabel={ariaLabel}
        accessibilityRole="button"
        disabled={isLoading || isDisabled}
        onPress={onClick ? onClick : () => {}}
        activeOpacity={highlight ? highlight : 0.8}
        ref={ref}
        {...props}
        style={style}
      >
        {innerButton}
      </StyledIOSButton>
    );
  }
};

export { IButtonProps } from './IButtonProps';
export { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import OldButton from './OldButton';
export default forwardRef(Button);
