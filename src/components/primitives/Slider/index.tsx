import React from 'react';
import { get } from 'lodash';
import { PanResponder } from 'react-native';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from '../../..';
export { default as SliderThumb } from './SliderThumb';
export { default as SliderFilledTrack } from './SliderFilledTrack';
export { default as SliderTrack } from './SliderTrack';
import type { ISliderProps, ISliderContextProps } from './props';
export type { ISliderProps, ISliderContextProps };

export const SliderContext = React.createContext({});
type StateType = {
  barSize: number | null;
  deltaValue: number;
  value: number;
};

class Slider extends React.Component<ISliderProps, StateType> {
  static contextType = ThemeContext;
  state = {
    barSize: null,
    deltaValue: 0,
    value: this.props.defaultValue || 0,
  };
  getColorScheme = (schemeColor: string) => {
    return get(this.context.colors, schemeColor, 'default.0');
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_event, gestureState) => this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => {},
  });

  onMove(gestureState: any) {
    const { barSize } = this.state;
    const newDeltaValue = this.getValueFromBottomOffset(
      gestureState.dx,
      barSize,
      this.props.min || 0,
      this.props.max || 100
    );
    this.props.onChange &&
      this.props.onChange(this.state.value + newDeltaValue);
    this.setState({
      deltaValue: newDeltaValue,
    });
  }
  onEndMove() {
    const { value, deltaValue } = this.state;
    this.props.onChangeEnd && this.props.onChangeEnd(value + deltaValue);
    this.setState({ value: value + deltaValue, deltaValue: 0 });
  }

  onBarLayout = (event: any) => {
    const { width: barSize } = event.nativeEvent.layout;
    this.setState({ barSize });
  };

  capValueWithinRange = (value: number, range: number[]) => {
    if (value < range[0]) return range[0];
    if (value > range[1]) return range[1];
    return value;
  };

  getValueFromBottomOffset = (
    offset: number,
    barSize: number | null,
    rangeMin: number,
    rangeMax: number
  ) => {
    if (barSize === null) return 0;
    return ((rangeMax - rangeMin) * offset) / barSize;
  };

  getBottomOffsetFromValue = (
    value: number,
    rangeMin: number,
    rangeMax: number,
    barSize: number | null
  ) => {
    if (barSize === null) return 0;
    const valueOffset = value - rangeMin;
    const totalRange = rangeMax - rangeMin;
    const percentage = valueOffset / totalRange;
    return barSize * percentage;
  };

  render() {
    const { value, deltaValue, barSize } = this.state;
    const cappedValue = this.capValueWithinRange(value + deltaValue, [
      this.props.min || 0,
      this.props.max || 100,
    ]);
    const sliderOffset = this.getBottomOffsetFromValue(
      cappedValue,
      this.props.min || 0,
      this.props.max || 100,
      barSize
    );

    return (
      <SliderContext.Provider
        value={{
          sliderOffset,
          colorScheme: this.getColorScheme(
            this.props.colorScheme || 'default.2'
          ),
          barSize: this.state.barSize,
          panResponder: this.panResponder,
          isReversed: this.props.isReversed,
        }}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minWidth="100%"
          {...this.props}
          onLayout={this.onBarLayout}
        >
          {this.props.children}
        </Box>
      </SliderContext.Provider>
    );
  }
}

const StyledSlider = styled(Slider)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

const NBSlider = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default NBSlider;
