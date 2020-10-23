import React from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from 'native-base';
export { default as SliderThumb } from './SliderThumb';
export { default as SliderFilledTrack } from './SliderFilledTrack';
export { default as SliderTrack } from './SliderTrack';
import type { ISliderProps } from './props';
export type { ISliderProps };

export const SliderContext = React.createContext({});

const Slider = ({ children, value, defaultValue, ...props }: ISliderProps) => {
  // TODO: Add inner shaddow in slider
  const theme = React.useContext(ThemeContext);
  let scaleX;
  let sliderValue = value || defaultValue || 50;
  const [sliderSize, setSliderSize] = React.useState(1);
  const provideSliderSize = (layout) => {
    setSliderSize(layout.width);
    console.log('sliderSize wilie setting - ', layout.width);
  };
  const updateSliderValue = (gestureStatus) => {
    console.log('sliderValue - ', sliderValue);
    console.log(' gestureStatus.dx - ', gestureStatus.dx);
    console.log('sliderSize - ', sliderSize);
    if (sliderSize) sliderValue = gestureStatus.dx / sliderSize + sliderValue;
    console.log('sliderValue - ', sliderValue);
    // console.log('sliderSize - ', sliderSize);
  };

  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureStatus) => {
        // console.log('gestureStatus at responder grant - ', gestureStatus);
        // console.log('SCALE == ', scaleX);
        // console.log('gestureStatus.x0 == ', gestureStatus.x0);
        // console.log('sliderValue == ', sliderValue);
        // console.log('event == ', event.nativeEvent);
        // sliderValue = pan.x._value;
        pan.setOffset({
          sliderValue,
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

      onPanResponderRelease: (event, gestureStatus) => {
        scaleX = gestureStatus.x0 / sliderValue;
        // console.log('ges - ', gestureStatus);
        // console.log('SCALE == ', scaleX);
        // console.log('gestureStatus.x0 == ', gestureStatus.x0);
        // console.log('gestureStatus.dx == ', gestureStatus.dx);
        // console.log('sliderValue == ', sliderValue);
        updateSliderValue(gestureStatus);
        // sliderValue = gestureStatus.dx / scaleX + sliderValue);
        // setSliderValue(gestureStatus.dx / scaleX + sliderValue);
        pan.flattenOffset();
      },
    })
  ).current;
  console.log(
    '=================SLIDER IS RERENDERED==================',
    sliderValue
  );

  return (
    <SliderContext.Provider value={{ sliderValue, pan, panResponder }}>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100%"
        height={10}
        backgroundColor="pink"
        {...props}
        onLayout={(e) => provideSliderSize(e.nativeEvent.layout)}
      >
        {children}
      </Box>
    </SliderContext.Provider>
  );
};

const StyledSlider = styled(Slider)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {};

const NBSlider = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default NBSlider;
