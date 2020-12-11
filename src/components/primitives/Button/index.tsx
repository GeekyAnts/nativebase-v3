import React, { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import type { TouchableOpacity as TouchableOpacityType } from 'react-native';
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
import { Text } from '../../primitives';
import { usePropsConfig, themeTools } from '../../../theme';
import { Spinner, Box, Flex } from '../../primitives';
import type { IButtonProps } from './IButtonProps';
import { useButton } from './useButton';
import type { IBoxProps } from '../Box';

const StyledButton = styled(TouchableOpacity)<
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
    leftIcon,
    rightIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const newProps = usePropsConfig('Button', {
    ...props,
    size,
  });
  let [textProps, remainingProps] = themeTools.extractInObject(newProps, [
    'fontWeight',
    'fontSize',
    'textDecorationLine',
    'color',
  ]);
  let [layoutProps, viewProps] = themeTools.extractInObject(remainingProps, [
    'm',
    'margin',
    'mt',
    'marginTop',
    'mr',
    'marginRight',
    'mb',
    'marginBottom',
    'ml',
    'marginLeft',
    'mx',
    'marginX',
    'my',
    'marginY',
  ]);

  let [
    additionalButtonProps,
    innerButtonProps,
  ] = themeTools.extractInObject(viewProps, [
    'accessible',
    'accessibilityRole',
    'accessibilityState',
    'accessibilityLabel',
    'accessibilityHint',
    'isDisabled',
    'onPress',
  ]);

  additionalButtonProps.isDisabled =
    additionalButtonProps.isDisabled || isLoading;

  const innerButton = (
    <Box {...innerButtonProps} opacity={isLoading ? 0.5 : 1} style={style}>
      {leftIcon ? (
        <Box mr={innerButtonProps.px / 2 || 2}>{leftIcon}</Box>
      ) : null}
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
      {rightIcon ? (
        <Box ml={innerButtonProps.px / 2 || 2}>{rightIcon}</Box>
      ) : null}
    </Box>
  );

  const { buttonProps } = useButton(additionalButtonProps, ref);

  return (
    <StyledButton
      activeOpacity={highlight ? highlight : 0.8}
      ref={ref}
      {...layoutProps}
      {...buttonProps}
    >
      {innerButton}
    </StyledButton>
  );
};

export type { IButtonProps };
export type { ButtonGroupProps } from './ButtonGroup';
export { ButtonGroup } from './ButtonGroup';
export default forwardRef<TouchableOpacityType, IButtonProps & IBoxProps>(
  Button
);
