import React from 'react';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import { Box } from 'native-base';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderTrack = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);

  const { sliderSize }: ISliderContextProps = React.useContext(SliderContext);

  return (
    <Box
      position="absolute"
      backgroundColor={theme.colors.gray[3]}
      height={sliderSize}
      borderRadius={theme.radii.md}
      width="100%"
      {...props}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default SliderTrack;
