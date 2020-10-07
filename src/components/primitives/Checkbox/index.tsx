import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../theme';

import styled from 'styled-components/native';
import { space, color, layout, typography, variant } from 'styled-system';
import View from '../View';

export type ICheckboxtProps = {
  checked: boolean | false;
  style?: any | undefined;
  type?: string | undefined;
  colorVarient:
    | 'default'
    | 'light'
    | 'dark'
    | 'muted'
    | 'warning'
    | 'danger'
    | 'success';
};

const CheckBox = ({ colorVarient, checked, ...props }: ICheckboxtProps) => {
  const style = StyleSheet.create({
    checkbox: {
      backgroundColor: theme.colors[colorVarient][0],
      padding: 5,
      borderColor: theme.colors[colorVarient][2],
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxMarked: {
      padding: 7,
      backgroundColor: theme.colors[colorVarient][2],
    },
    checkboxUnmarked: {
      padding: 7,
      backgroundColor: theme.colors[colorVarient][0],
    },
  });

  const [isSelected, setSelection] = useState(checked);
  return (
    <TouchableOpacity
      {...props}
      style={[style.checkbox, props.style]}
      onPress={() => setSelection(!isSelected)}
    >
      <View
        style={
          isSelected
            ? [style.checkboxMarked, props.style]
            : style.checkboxUnmarked
        }
      ></View>
    </TouchableOpacity>
  );
};

const StyledCheckbox = styled(CheckBox)<ICheckboxtProps>(
  space,
  color,
  layout,
  typography,
  variant({
    prop: 'type',
    variants: {
      circle: { borderRadius: 50 },
      rounded: { borderRadius: 5 },
      square: { borderRadius: 2 },
    },
  })
);
StyledCheckbox.defaultProps = {
  type: 'rounded',
  colorVarient: 'default',
};

const NBCheckbox = ({ ...props }: ICheckboxtProps) => {
  return <StyledCheckbox {...props} />;
};

export default NBCheckbox;
