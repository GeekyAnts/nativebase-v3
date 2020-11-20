import React, { forwardRef, useState } from 'react';
import { TextInput, Platform } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { Box, Text } from '..';
import type { IInputProps } from './IInputProps';
import { InputRightAddon, InputGroup, InputLeftAddon } from './InputGroup';
import { usePropsConfig } from '../../../theme';
import { isNil } from 'lodash';

const StyledInput = styled(TextInput)<IInputProps>(
  color,
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

const Input = (
  {
    style,
    isInvalid,
    isDisabled,
    placeholder,
    errorMessage,
    // isRequired,
    isReadOnly,
    isFullWidth,
    onFocus,
    onBlur,
    focusBorderColor,
    errorBorderColor,
    errorMessageColor,
    ariaLabel,
    InputLeftElement,
    InputRightElement,
    type,
    w,
    width,
    h,
    height,
    m,
    mr,
    ml,
    mt,
    mb,
    p,
    pr,
    pl,
    pt,
    pb,
    ...props
  }: IInputProps,
  ref: any
) => {
  const LayoutProps = {
    w,
    width,
    m,
    mr,
    ml,
    mt,
    mb,
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const focusProps = isFocused
    ? {
        borderWidth: 1,
        borderColor: focusBorderColor ? focusBorderColor : 'default.50',
      }
    : {};

  const isInvalidProps = isInvalid
    ? {
        borderColor: errorBorderColor ? errorBorderColor : 'danger.200',
      }
    : {};

  const newProps = usePropsConfig('Input', props);

  const computedProps = {
    display: 'flex',
    flexDirection: 'row',
    ...focusProps,
    ...isInvalidProps,
    p: !isNil(p) ? p : Platform.OS === 'android' ? 0 : 3, // Android's input have default padding.
    pr,
    pl,
    pt,
    pb,
    h,
    height,
  };
  return (
    <Box w={isFullWidth ? '100%' : 'auto'} {...LayoutProps}>
      <Box
        {...newProps}
        {...(isDisabled ? newProps._isDisabledProps : {})}
        {...computedProps}
        style={style}
      >
        <Box left={0}>{InputLeftElement}</Box>
        <StyledInput
          {...newProps}
          flex={1}
          secureTextEntry={type === 'password' ? true : false}
          accessible={true}
          accessibilityLabel={ariaLabel}
          onKeyPress={(e: any) => {
            e.persist();
          }}
          onFocus={() => {
            handleFocus(true, onFocus ? onFocus : () => {});
          }}
          onBlur={() => {
            handleFocus(false, onBlur ? onBlur : () => {});
          }}
          placeholder={placeholder}
          p={1}
          editable={isDisabled || isReadOnly ? false : true}
          borderRadius={undefined} //Remove variant props from StyledInput
          borderWidth={undefined}
          borderBottomWidth={undefined}
          ref={ref}
        />
        <Box right={0}>{InputRightElement}</Box>
      </Box>

      {isInvalid && errorMessage ? (
        <Text
          ml={2}
          color={errorMessageColor ? errorMessageColor : 'danger.200'}
        >
          {errorMessage}
        </Text>
      ) : null}
    </Box>
  );
};

//-------------------------------- InputGroup and other Child components -------------------------------
export { InputRightAddon, InputGroup, InputLeftAddon };
export { IInputProps } from './IInputProps';
export default forwardRef(Input);
