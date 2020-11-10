import React from 'react';
import { ThemeContext } from '../../../theme';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from '../../primitives';
import type { ISliderProps } from './props';

const NBSliderTrack = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Box
      position="absolute"
      backgroundColor={theme.colors.gray[3]}
      height={theme.sizes[1]}
      borderRadius={theme.radii.md}
      width="100%"
      {...props}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

const StyledSlider = styled(NBSliderTrack)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
// StyledSlider.defaultProps = {};

const SliderTrack = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default SliderTrack;
