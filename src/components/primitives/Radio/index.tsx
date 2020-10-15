import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { View } from 'native-base';
import type { IRadioProps, IRadioGroupProps } from './props';
export { default as RadioGroup } from './RadioGroup';
export type { IRadioProps, IRadioGroupProps };

const Radio = ({
  style,
  children,
  onChange,
  isChecked,
  isDisabled,
  value,
  ariaLabel,
  isInvalid,
  icon,
  ...props
}: IRadioProps) => {
  const theme = React.useContext(ThemeContext);
  const colorScheme = props.colorScheme || 'default';
  const size = props.size || 'md';
  let activeColor = theme.colors.default[2];

  const pressHandler = (event: any) => {
    onChange && onChange(event, value);
  };

  if (isDisabled) activeColor = theme.colors.gray[3];
  else if (isInvalid) activeColor = theme.colors.danger[2];
  else if (colorScheme in theme.colors && theme.colors[colorScheme]) {
    activeColor =
      typeof theme.colors[colorScheme] === 'string'
        ? theme.colors[colorScheme]
        : theme.colors[colorScheme][5] || theme.colors[colorScheme][2];
  }
  const baseStyle = StyleSheet.create({
    radioWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    radio: {
      backgroundColor: 'transparent',
      borderColor: activeColor,
      borderWidth: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    radioMarked: {
      backgroundColor: activeColor,
      borderRadius: 50,
    },
    radioUnmarked: {
      backgroundColor: 'transparent',
    },
    sm: {
      margin: 3,
      padding: 3,
    },
    md: {
      margin: 4,
      padding: 4,
    },
    lg: {
      margin: 5,
      padding: 5,
    },
    disabled: {
      borderColor: theme.colors.gray[2],
    },
  });

  const iconSetter = () => {
    if (icon)
      return isChecked ? (
        icon
      ) : (
        <View style={[baseStyle.radioUnmarked, baseStyle[size]]} />
      );
    return (
      <View
        style={
          isChecked
            ? [baseStyle.radioMarked, baseStyle[size]]
            : [baseStyle.radioUnmarked, baseStyle[size]]
        }
      />
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      {...props}
      disabled={isDisabled}
      style={[baseStyle.radioWrapper, style]}
      onPress={(event) => pressHandler(event)}
      accessible={true}
      accessibilityLabel={ariaLabel}
      accessibilityRole="radio"
    >
      <View style={[baseStyle.radio]}>{iconSetter()}</View>
      {children}
    </TouchableOpacity>
  );
};

const StyledRadio = styled(Radio)<IRadioProps>(space);
StyledRadio.defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'default',
};

const NBRadio = ({ children, ...props }: IRadioProps) => {
  return <StyledRadio {...props}>{children}</StyledRadio>;
};

export default NBRadio;
