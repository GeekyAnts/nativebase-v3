import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import type { IContainerProps } from './props';
export type { IContainerProps };

const NBContainer = ({
  children,
  centerContent,
  ...props
}: IContainerProps) => {
  return (
    <Box alignItems={centerContent ? 'center' : 'flex-start'} {...props}>
      {children}
    </Box>
  );
};

const StyledContainer = styled(NBContainer)<IContainerProps>(space);
StyledContainer.defaultProps = {
  centerContent: false,
  maxWidth: '80%',
};

const Container = ({ children, ...props }: IContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
