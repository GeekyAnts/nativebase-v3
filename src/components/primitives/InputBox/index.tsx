import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TextInputProps,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  variant,
  space,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';
import { theme } from '../../../index';
import { Box } from '../../primitives';
export type IInputBoxProps = ColorProps &
  TextInputProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | undefined | JSX.Element[] | JSX.Element;
    fontSize?: number | any;
    placeholder?: string | undefined;
    isInvalid?: boolean;
    variant?: string | undefined;
    isDisabled?: boolean | undefined;
    colorScheme?: string | undefined;
    errorMessage?: string | undefined;
    successMessage?: string | undefined;
    inputSize?: string | undefined;
  };
const roundedStyle = {
  borderRadius: '50',
  borderWidth: 1,
  borderColor: 'black',
};
const defaultStyle = {
  borderWidth: 1,
  borderColor: 'black',
};
const successStyle = {
  borderColor: theme.colors.success[2],
};
const dangerStyle = {
  borderColor: theme.colors.danger[2],
};
const underlinedStyle = {
  borderRadius: 0,
  borderWidth: 0,
  borderColor: 'black',
  borderBottomWidth: 1,
};
const StyledBox = styled(View)<IInputBoxProps>(
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
  customLayout,
  variant({
    prop: 'inputSize',
    variants: {
      '2xl': { fontSize: theme.fontSizes[5] },
      'xl': { fontSize: theme.fontSizes[4] },
      'lg': { fontSize: theme.fontSizes[3] },
      'md': { fontSize: theme.fontSizes[2] },
      'sm': { fontSize: theme.fontSizes[1] },
      'xsm': { fontSize: theme.fontSizes[0] },
    },
  }),
  variant({
    variants: {
      underlined: underlinedStyle,
      rounded: roundedStyle,
      default: defaultStyle,
    },
  }),
  variant({
    prop: 'colorScheme',
    variants: {
      success: successStyle,
      error: dangerStyle,
      default: {},
    },
  })
);
const StyledInputBox = styled(TextInput)<IInputBoxProps>(
  color,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  variant({
    prop: 'inputSize',
    variants: {
      '2xl': { fontSize: theme.fontSizes[5] },
      'xl': { fontSize: theme.fontSizes[4] },
      'lg': { fontSize: theme.fontSizes[3] },
      'md': { fontSize: theme.fontSizes[2] },
      'sm': { fontSize: theme.fontSizes[1] },
      'xsm': { fontSize: theme.fontSizes[0] },
    },
  })
);

StyledBox.defaultProps = {
  inputSize: 'md',
  variant: 'default',
  colorScheme: 'default',
};
StyledInputBox.defaultProps = {
  inputSize: 'md',
};
const InputBox = (
  {
    style,
    isInvalid,
    isDisabled,
    placeholder,
    inputSize,
    errorMessage,
    successMessage,
    ...props
  }: IInputBoxProps,
  ref: any
) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    isDisabled ? { backgroundColor: '#f6f6f6', borderColor: '#c0c4c7' } : {},
    isInvalid ? { borderWidth: 1, borderColor: 'red' } : {},
    { display: 'flex', flexDirection: 'row', width: '100%' },
    props.borderColor ? { borderColor: props.borderColor } : {},
  ]);
  return (
    <Box>
      <StyledBox p={1} {...props} style={computedStyle}>
        <StyledInputBox
          style={props.fontSize ? { fontSize: props.fontSize } : {}}
          inputSize={inputSize}
          placeholder={placeholder}
          p={1}
          editable={isDisabled ? false : true}
          {...props}
          ref={ref}
        />
        {props.colorScheme ? (
          props.colorScheme === 'error' ? (
            <Text>Error Icon</Text>
          ) : props.colorScheme === 'success' ? (
            <Text>Success Icon</Text>
          ) : (
            <Box />
          )
        ) : (
          <Box />
        )}
      </StyledBox>

      {props.colorScheme == 'error' && errorMessage ? (
        <Text style={{ marginLeft: 10, color: theme.colors.danger[2] }}>
          {errorMessage}
        </Text>
      ) : (
        <Box />
      )}
      {props.colorScheme == 'success' && successMessage ? (
        <Text style={{ marginLeft: 10, color: theme.colors.success[2] }}>
          {successMessage}
        </Text>
      ) : (
        <Box />
      )}
    </Box>
  );
};

export default forwardRef(InputBox);
