import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import View from '../View';
import type { ISliderProps } from './props';
export type { ISliderProps };

// export type ISliderProps = {
// colorVarient: any;
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
// };

const theme = React.useContext(ThemeContext);

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

const Slider = ({ colorVarient, ...props }: ISliderProps) => {
  console.log('PROPS ===', props);
  console.log('colorVarient -', colorVarient);
  const SliderContext = React.createContext({ status: 'context created' });
  // const [value, setValue] = useState(30);
  return (
    // <View {...props} style={[style.slider, props.style]}>
    <SliderContext.Provider value={{ name: 'init value' }}>
      <TouchableOpacity
        // style={[style.slider, props.style]}
        onPress={(e) => {
          console.log('coord = ', e.nativeEvent);
        }}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </TouchableOpacity>
    </SliderContext.Provider>
    // </View>
  );
};

const StyledSlider = styled(Slider)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {
  // colorVarient: 'default',
};

const NBSlider = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default NBSlider;
