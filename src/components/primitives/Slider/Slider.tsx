import React from 'react';
import { PanResponder } from 'react-native';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import { usePropsConfig } from '../../../hooks';
import type { ISliderProps } from './props';
import { SliderContext } from './Context';

type StateType = {
  barSize: number | null;
  deltaValue: number;
  value: number;
};

class NBSlider extends React.Component<
  ISliderProps & {
    thumbSize?: number;
    sliderSize?: number;
    activeColor?: string;
  },
  StateType
> {
  static contextType = SliderContext;
  state = {
    barSize: null,
    deltaValue: 0,
    value: this.props.defaultValue || 0,
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_event, gestureState) =>
      !(this.props.isDisabled || this.props.isReadOnly) &&
      this.onMove(gestureState),
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

  getOffsetFromValue = (
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
    const sliderOffset = this.getOffsetFromValue(
      cappedValue,
      this.props.min || 0,
      this.props.max || 100,
      barSize
    );

    return (
      <SliderContext.Provider
        value={{
          sliderOffset,
          colorScheme: this.props.activeColor,
          barSize: this.state.barSize,
          panResponder: this.panResponder,
          isReversed: this.props.isReversed,
          thumbSize: this.props.thumbSize,
          sliderSize: this.props.sliderSize,
        }}
      >
        <Box
          position="relative"
          display="flex"
          my={3}
          justifyContent="center"
          alignItems="center"
          minHeight={3}
          minWidth="100%"
          {...this.props}
          onLayout={this.onBarLayout}
        >
          {this.state.barSize && this.state.value && this.props.children}
        </Box>
      </SliderContext.Provider>
    );
  }
}

const Slider = ({ ...props }: ISliderProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const newProps = usePropsConfig('Slider', {
    ...formControlContext,
    ...props,
  });

  return <NBSlider {...newProps} />;
};

export default Slider;
