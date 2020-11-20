import React from 'react';
import { Box } from '../../primitives';
import { SliderContext } from './index';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderTrack = ({ children, ...props }: ISliderProps) => {
  const { sliderSize }: ISliderContextProps = React.useContext(SliderContext);

  return (
    <Box
      position="absolute"
      backgroundColor="muted.50"
      height={sliderSize}
      borderRadius={999}
      width="100%"
      {...props}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default SliderTrack;
