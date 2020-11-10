import React from 'react';
import { SliderContext } from './index';
import { Box } from 'native-base';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderTrack = ({ children, ...props }: ISliderProps) => {
  const { sliderSize }: ISliderContextProps = React.useContext(SliderContext);

  return (
    <Box
      position="absolute"
      backgroundColor="muted.0"
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
