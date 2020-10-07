import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../theme';

import styled from 'styled-components/native';
import { space, color, layout, typography, variant } from 'styled-system';
import View from '../View';

export type IRadioProps = {
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

const Radio = ({ colorVarient, checked, ...props }: IRadioProps) => {
  const style = StyleSheet.create({
    radio: {
      backgroundColor: theme.colors[colorVarient][0],
      padding: 5,
      borderColor: theme.colors[colorVarient][2],
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioMarked: {
      padding: 7,
      backgroundColor: theme.colors[colorVarient][2],
    },
    radioUnmarked: {
      padding: 7,
      backgroundColor: theme.colors[colorVarient][0],
    },
  });

  const [isSelected, setSelection] = useState(checked);
  return (
    <TouchableOpacity
      {...props}
      style={[style.radio, props.style]}
      onPress={() => setSelection(!isSelected)}
    >
      <View
        style={
          isSelected ? [style.radioMarked, props.style] : style.radioUnmarked
        }
      ></View>
    </TouchableOpacity>
  );
};

const StyledRadio = styled(Radio)<IRadioProps>(
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
StyledRadio.defaultProps = {
  type: 'circle',
  colorVarient: 'default',
};

const NBRadio = ({ ...props }: IRadioProps) => {
  return <StyledRadio {...props} />;
};

export default NBRadio;
