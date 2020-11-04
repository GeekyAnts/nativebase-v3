import React, { forwardRef } from 'react';
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
import { usePropsConfig, Text, themeTools } from 'native-base';
import { Spinner, Box, IBoxProps, Flex } from '../../primitives';
import type { IButtonProps } from './IButtonProps';
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
const Button = (
  {
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
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const newProps = usePropsConfig('Button', {
    ...props,
    size,
  });
  let {
    fontWeight,
    fontSize,
    textDecorationLine,
    color,
    m,
    margin,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    ...viewProps
  } = newProps;

  const layoutProps = themeTools.omitUndefined({
    m,
    margin,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
  });
  const textProps = {
    fontWeight,
    fontSize,
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
      <StyledAndroidButton
        accessible
        accessibilityLabel={ariaLabel}
        accessibilityRole="button"
        disabled={isLoading || isDisabled}
        onPress={onClick ? onClick : () => {}}
        background={TouchableNativeFeedback.Ripple(textProps.color, false)}
        ref={ref}
        {...layoutProps}
      >
        {innerButton}
      </StyledAndroidButton>
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
        {...layoutProps}
      >
        {innerButton}
      </StyledIOSButton>
    );
  }
};

export { IButtonProps } from './IButtonProps';
export { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
export default forwardRef(Button);
