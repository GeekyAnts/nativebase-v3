import React from 'react';
import styled from 'styled-components/native';
import { Box, Skeleton, Stack } from 'native-base';
import { space, layout, border } from 'styled-system';
import type { ISkeletonTextProps } from './props';
export type { ISkeletonTextProps };

const NBSkeletonText = ({
  startColor,
  endColor,
  ...props
}: ISkeletonTextProps) => {
  const noOfLines = props.noOfLines || 3;
  const para = [];
  for (let i = 0; i < noOfLines; i++) {
    para.push(
      <Skeleton
        width={i === noOfLines - 1 ? '70%' : '100%'}
        height={5}
        startColor={startColor}
        endColor={endColor}
      />
    );
  }
  return (
    <Stack space={3} width="80%" {...props}>
      {para}
    </Stack>
  );
};

const StyledSkeleton = styled(NBSkeletonText)<ISkeletonTextProps>(
  space,
  layout,
  border
);
StyledSkeleton.defaultProps = {
  noOfLines: 3,
};

const SkeletonText = ({ children, isLoaded, ...props }: ISkeletonTextProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  return <StyledSkeleton {...props} />;
};

export default SkeletonText;
