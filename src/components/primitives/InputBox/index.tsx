import React, { forwardRef, useState } from 'react';
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
import { getAttachedChildren } from '../../../utils';
import { ThemeContext } from '../../../index';
import { Box, IBoxProps } from '../../primitives';
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
    isRequired?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    focusBorderColor?: string;
    errorBorderColor?: string;
    errorMessageColor?: string;
    ariaLabel?: string;
    InputLeftElement?: JSX.Element | JSX.Element[];
    InputRightElement?: JSX.Element | JSX.Element[];
    type?: 'text' | 'password' | string;
  };
const roundedStyle = {
  borderRadius: '50',
  borderWidth: 1,
  borderColor: 'gray.4',
};
const defaultStyle = {
  borderWidth: 1,
  borderColor: 'gray.4',
};
const successStyle = {
  borderColor: 'success.2',
};
const dangerStyle = {
  borderColor: 'danger.2',
};
const filledStyle = {
  backgroundColor: 'gray.2',
};
const unstyledStyle = {
  borderWidth: 0,
};
const underlinedStyle = {
  borderRadius: 0,
  borderWidth: 0,
  borderColor: 'gray.4',
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
      '2xl': { fontSize: '2xl' },
      'xl': { fontSize: 'xl' },
      'lg': { fontSize: 'lg' },
      'md': { fontSize: 'md' },
      'sm': { fontSize: 'sm' },
      'xs': { fontSize: 'xs' },
    },
  }),
  variant({
    variants: {
      outline: defaultStyle,
      underlined: underlinedStyle,
      rounded: roundedStyle,
      filled: filledStyle,
      unstyled: unstyledStyle,
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
      '2xl': { fontSize: '2xl' },
      'xl': { fontSize: 'xl' },
      'lg': { fontSize: 'lg' },
      'md': { fontSize: 'md' },
      'sm': { fontSize: 'sm' },
      'xs': { fontSize: 'xs' },
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
    ...props
  }: IInputBoxProps,
  ref: any
) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = React.useContext(ThemeContext);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    console.log(isFocused);
    callback();
  };

  const focusStyle = {
    borderWidth: 1,
    borderColor: focusBorderColor ? focusBorderColor : theme.colors.default[0],
  };

  const isInvalidStyle = {
    borderColor: errorBorderColor ? errorBorderColor : theme.colors.danger[2],
  };

  const isDisabledStyle = {
    backgroundColor: theme.colors.gray[1],
    borderColor: theme.colors.gray[3],
  };

  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    isFullWidth ? { width: '100%' } : {},
    isDisabled ? isDisabledStyle : {},
    props.colorScheme === 'error' || isInvalid ? isInvalidStyle : {},
    { display: 'flex', flexDirection: 'row', width: '100%' },
    props.borderColor ? { borderColor: props.borderColor } : {},
    isFocused && (!isInvalid || props.colorScheme) ? focusStyle : {},
  ]);
  return (
    <Box>
      <StyledBox p={1} {...props} style={computedStyle}>
        <Box>{InputLeftElement}</Box>
        <StyledInputBox
          secureTextEntry={type === 'password' ? true : false}
          accessible={true}
          accessibilityLabel={ariaLabel}
          onKeyPress={(e: any) => {
            e.persist();
            console.log(e.target);
          }}
          onFocus={() => {
            handleFocus(true, onFocus ? onFocus : () => {});
          }}
          onBlur={() => {
            handleFocus(false, onBlur ? onBlur : () => {});
          }}
          style={props.fontSize ? { fontSize: props.fontSize } : {}}
          inputSize={inputSize}
          placeholder={placeholder}
          p={1}
          editable={isDisabled || isReadOnly ? false : true}
          {...props}
          ref={ref}
        />
        {props.colorScheme || isInvalid ? (
          props.colorScheme === 'error' ? (
            <Box bg="black" width="20" height="20" />
          ) : props.colorScheme === 'success' ? (
            <Box bg="black" width="20" height="20" />
          ) : (
            <Box />
          )
        ) : (
          <Box />
        )}
        <Box>{InputRightElement}</Box>
      </StyledBox>

      {(props.colorScheme === 'error' || isInvalid) && errorMessage ? (
        <Text
          style={{
            marginLeft: 10,
            color: errorMessageColor
              ? errorMessageColor
              : theme.colors.danger[2],
          }}
        >
          {errorMessage}
        </Text>
      ) : (
        <Box />
      )}
      {props.colorScheme === 'success' && successMessage ? (
        <Text style={{ marginLeft: 10, color: theme.colors.success[2] }}>
          {successMessage}
        </Text>
      ) : (
        <Box />
      )}
    </Box>
  );
};

//-------------------------------- InputGroup and other Child components -------------------------------

const addonsDefaultStyle = {
  p: 3,
  borderColor: 'gray.3',
  borderWidth: 1,
};

export const InputLeftAddon = (props: IBoxProps & IInputBoxProps) => {
  return (
    <Box
      {...addonsDefaultStyle}
      borderRightWidth={0}
      roundedLeft={4}
      bg="gray.2"
      {...props}
    >
      <Box m="auto">{props.children}</Box>
    </Box>
  );
};
export const InputRightAddon = (props: IBoxProps & IInputBoxProps) => {
  return (
    <Box
      {...addonsDefaultStyle}
      borderLeftWidth={0}
      roundedRight={4}
      bg="gray.2"
      {...props}
    >
      <Box m="auto">{props.children}</Box>
    </Box>
  );
};

type InputGroupProps = {
  children: Element | Element[];
  variant?: string | undefined;
  inputSize?: string | undefined;
};
const StyledInputGroup = styled.View<InputGroupProps>`
  flex-direction: row;
  flex-wrap: wrap;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

const supplyPropsToChildren = (children: any, props: any) => {
  return children.map((child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const InputGroup = ({ children, ...props }: InputGroupProps) => {
  return (
    <StyledInputGroup>
      {supplyPropsToChildren(getAttachedChildren(children), props)}
    </StyledInputGroup>
  );
};

export default forwardRef(InputBox);
