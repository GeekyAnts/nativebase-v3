import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../theme';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import View from '../View';

export type ISlidertProps = {
  // checked: boolean | false;
  // style?: any | undefined;
  // type?: string | undefined;
  // colorVarient:
  //   | 'default'
  //   | 'light'
  //   | 'dark'
  //   | 'muted'
  //   | 'warning'
  //   | 'danger'
  //   | 'success';
};
const style = StyleSheet.create({
  slider: {
    width: '100%',
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SliderTrack: {
    position: 'absolute',
    // backgroundColor: theme.colors[colorVarient][0],
    backgroundColor: 'grey',
    height: 10,
    width: '100%',
  },
  SliderFilledTrack: {
    position: 'absolute',
    // backgroundColor: theme.colors[colorVarient][0],
    left: 0,
    backgroundColor: 'blue',
    height: 10,
    width: '30%',
  },
  SliderThumb: {
    position: 'absolute',
    // backgroundColor: theme.colors[colorVarient][0],
    backgroundColor: 'red',
    left: '30%',
    height: 20,
    width: 20,
  },
});
export const SliderThumb = () => <View style={style.SliderThumb} />;
export const SliderTrack = () => <View style={style.SliderTrack} />;
export const SliderFilledTrack = () => <View style={style.SliderFilledTrack} />;

const Slider = ({ colorVarient, ...props }: ISlidertProps) => {
  const [value, setValue] = useState(30);
  return (
    // <View {...props} style={[style.slider, props.style]}>
    <TouchableOpacity
      style={[style.slider, props.style]}
      onPress={(e) => {
        console.log('coord = ', e.nativeEvent);
      }}
    >
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </TouchableOpacity>
    // </View>
  );
};

const StyledSlider = styled(Slider)<ISlidertProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {
  colorVarient: 'default',
};

const NBSlider = ({ ...props }: ISlidertProps) => {
  return <StyledSlider {...props} />;
};

export default NBSlider;
