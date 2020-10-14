import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { SpaceProps, TypographyProps, space } from 'styled-system';
import type { ReactElement } from 'react';
import { View } from 'native-base';
export { default as RadioGroup, IRadioGroupProps } from './RadioGroup';

export type IRadioProps = SpaceProps &
  TypographyProps & {
    id?: string;
    name?: string;
    value?: string | number;
    colorScheme?: string | 'default';
    defaultIsChecked?: boolean;
    isChecked?: boolean;
    // isFullWidth?: boolean;
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
    // onBlur?: (event: any) => void;
    // onFocus?: (event: any) => void;
    ariaLabel?: string;
    // ariaLabelledby?: string;
    // Custom Props
    style?: any | undefined;
  };

const CheckBox = ({
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
  // console.log('PROPS === ', props);

  const theme = React.useContext(ThemeContext);
  const colorScheme = props.colorScheme || 'default';
  const size = props.size || 'md';
  let activeColor = theme.colors.default[2];

  // const [radioState, setRadioState] = React.useState(
  //   isChecked || defaultIsChecked
  // );
  const pressHandler = (event: any) => {
    // isChecked = !radioState;
    // setRadioState(isChecked);
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

const StyledRadio = styled(CheckBox)<IRadioProps>(space);
StyledRadio.defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'default',
};

const NBRadio = ({ children, ...props }: IRadioProps) => {
  console.log('Props form Storybook -', props);

  return <StyledRadio {...props}>{children}</StyledRadio>;
};

export default NBRadio;
