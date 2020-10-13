import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';

import styled from 'styled-components/native';
import {
  SpaceProps,
  TypographyProps,
  space,
  layout,
  variant,
} from 'styled-system';
import type { ReactElement } from 'react';
import { View, Text } from 'native-base';
// import View from '../View';

export type ICheckboxtProps = SpaceProps &
  SpaceProps &
  TypographyProps & {
    // Chakra UI Porps
    id?: string;
    name?: string;
    value?: string | number;
    colorScheme?: string;
    defaultIsChecked?: boolean;
    isChecked: boolean;
    isIndeterminate?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactElement;
    children?: JSX.Element;
    onChange: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    ariaLabel?: string;
    ariaLabelledby?: string;
    // Custom props
    style?: any | undefined;
    type?: string | undefined;

    // basic props from @react-native-community/checkbox
    // disabled?: boolean;
    // value?: any;
    // onValueChange?: (value: boolean) => void;
  };

const CheckBox = ({
  size,
  children,
  onChange,
  colorScheme,
  isChecked,
  defaultIsChecked,
  icon,
  type,
  ...props
}: ICheckboxtProps) => {
  console.log('PROPS - ', props);

  const [isSelected, setSelection] = React.useState(defaultIsChecked);

  const theme = React.useContext(ThemeContext);

  const style = StyleSheet.create({
    checkboxWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      backgroundColor: theme.colors[colorScheme][0],
      padding: 5,
      borderColor: theme.colors[colorScheme][2],
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxMarked: {
      backgroundColor: theme.colors[colorScheme][2],
    },
    checkboxUnmarked: {
      backgroundColor: theme.colors[colorScheme][0],
    },
    circle: {
      borderRadius: 250,
    },
    rounded: {
      borderRadius: 4,
    },
    square: {
      borderRadius: 2,
    },
    sm: {
      padding: 3,
    },
    md: {
      padding: 5,
    },
    lg: {
      padding: 7,
    },
  });

  // if (colorScheme in theme.colors && theme.colors[colorScheme])
  //   colorScheme =
  //     typeof theme.colors[colorScheme] === 'string'
  //       ? theme.colors[colorScheme]
  //       : theme.colors[colorScheme][5] || theme.colors[colorScheme][2];

  const iconSetter = () => {
    if (icon) return icon;
    return (
      <View
        style={
          isChecked
            ? [style.checkboxMarked, props.style, style[type], style[size]]
            : [style.checkboxUnmarked, style[type], style[size]]
        }
      />
    );
  };

  return (
    <TouchableOpacity
      {...props}
      style={[style.checkboxWrapper, props.style]}
      onPress={(event) => onChange(event)}
    >
      <View style={[style.checkbox, style[type]]}>{iconSetter()}</View>
      {children}
    </TouchableOpacity>
  );
};

const StyledCheckbox = styled(CheckBox)<ICheckboxtProps>(
  space
  // layout
  // variant({
  //   prop: 'type',
  //   variants: {
  //     circle: { borderRadius: 50 },
  //     rounded: { borderRadius: 5 },
  //     square: { borderRadius: 2 },
  //   },
  // })
);
StyledCheckbox.defaultProps = {
  size: 'md',
  type: 'rounded',
  colorScheme: 'default',
};

const NBCheckbox = ({ children, size, ...props }: ICheckboxtProps) => {
  console.log('Props form Storybook -', props);

  return (
    <StyledCheckbox size={size} {...props}>
      {children}
    </StyledCheckbox>
  );
};

export default NBCheckbox;
