import React from 'react';
import { SliderContext } from './index';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from 'native-base';
import type { ISliderProps, ISliderContextProps } from './props';

const NBSliderFilledTrack = ({ ...props }: ISliderProps) => {
  const {
    isReversed,
    colorScheme,
    barSize = 0,
    sliderOffset = 0,
  }: ISliderContextProps = React.useContext(SliderContext);
  return (
    <Box
      left={isReversed ? sliderOffset : sliderOffset - barSize}
      backgroundColor={colorScheme}
      height="100%"
      width="100%"
      {...props}
    />
  );
};

const StyledSlider = styled(NBSliderFilledTrack)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {};

const SliderFilledTrack = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default SliderFilledTrack;
