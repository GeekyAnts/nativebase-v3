import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { SpaceProps, TypographyProps, space } from 'styled-system';
import type { ReactElement } from 'react';
import { View } from 'native-base';
export { default as CheckboxGroup, ICheckboxGroupProps } from './CheckboxGroup';

export type ICheckboxProps = SpaceProps &
  TypographyProps & {
    style?: any | undefined;
    checboxGroupChild?: boolean;
    // Chakra UI Porps
    id?: string;
    name?: string;
    value?: string | number;
    colorScheme?: string | 'default';
    defaultIsChecked?: boolean;
    isChecked?: boolean;
    isIndeterminate?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactElement;
    children?: JSX.Element;
    onChange?: (
      event?: any,
      currentState?: boolean,
      value?: string | number | undefined
    ) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    ariaLabel?: string;
    ariaLabelledby?: string;
  };

const CheckBox = ({
  style,
  children,
  onChange,
  isChecked,
  defaultIsChecked,
  isDisabled,
  value,
  ariaLabel,
  isInvalid,
  icon,
  ...props
}: ICheckboxProps) => {
  // console.log('PROPS - ', props);

  const theme = React.useContext(ThemeContext);
  const colorScheme = props.colorScheme || 'default';
  const size = props.size || 'md';
  let activeColor = theme.colors.default[2];

  const [checkboxState, setCheckboxState] = React.useState(
    isChecked || defaultIsChecked
  );
  const pressHandler = (event: any) => {
    isChecked = !checkboxState;
    setCheckboxState(isChecked);
    onChange && onChange(event, isChecked, value);
  };

  if (isDisabled) activeColor = theme.colors.gray[3];
  else if (isInvalid) activeColor = theme.colors.danger[2];
  else if (colorScheme in theme.colors && theme.colors[colorScheme])
    activeColor =
      typeof theme.colors[colorScheme] === 'string'
        ? theme.colors[colorScheme]
        : theme.colors[colorScheme][5] || theme.colors[colorScheme][2];

  const baseStyle = StyleSheet.create({
    checkboxWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      backgroundColor: 'transparent',
      borderColor: activeColor,
      borderWidth: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
    },
    checkboxMarked: {
      backgroundColor: activeColor,
    },
    checkboxUnmarked: {
      backgroundColor: 'transparent',
    },
    sm: {
      margin: 3,
      padding: 3,
      borderRadius: 2,
    },
    md: {
      margin: 4,
      padding: 4,
      borderRadius: 2,
    },
    lg: {
      margin: 5,
      padding: 5,
      borderRadius: 3,
    },
    disabled: {
      borderColor: theme.colors.gray[2],
    },
  });

  const iconSetter = () => {
    if (icon)
      return checkboxState ? (
        icon
      ) : (
        <View style={[baseStyle.checkboxUnmarked, baseStyle[size]]} />
      );
    return (
      <View
        style={
          checkboxState
            ? [baseStyle.checkboxMarked, baseStyle[size]]
            : [baseStyle.checkboxUnmarked, baseStyle[size]]
        }
      />
    );
  };

  return (
    <TouchableOpacity
      {...props}
      disabled={isDisabled}
      style={[baseStyle.checkboxWrapper, style]}
      onPress={(event) => pressHandler(event)}
      accessible={true}
      accessibilityLabel={ariaLabel}
      accessibilityRole="checkbox"
    >
      <View style={[baseStyle.checkbox]}>{iconSetter()}</View>
      {children}
    </TouchableOpacity>
  );
};

const StyledCheckbox = styled(CheckBox)<ICheckboxProps>(space);
StyledCheckbox.defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'default',
};

const NBCheckbox = ({ children, ...props }: ICheckboxProps) => {
  // console.log('Props form Storybook -', props);

  return <StyledCheckbox {...props}>{children}</StyledCheckbox>;
};

export default NBCheckbox;
