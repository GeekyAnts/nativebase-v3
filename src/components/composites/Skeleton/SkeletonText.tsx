import React from 'react';
import { Box, Skeleton, Stack, usePropsConfig } from '@native-base/v3';
import type { ISkeletonTextProps } from './props';

const NBSkeletonText = ({ ...props }: ISkeletonTextProps) => {
  const newProps = usePropsConfig('SkeletonText', props);
  const { skeletonColor, lineSize, baseColor, noOfLines } = newProps;
  const para = [];
  for (let i = 0; i < noOfLines; i++) {
    para.push(
      <Skeleton
        width={i === noOfLines - 1 ? '70%' : '100%'}
        height={lineSize}
        startColor={skeletonColor}
        endColor={baseColor}
      />
    );
  }
  return (
    <Stack space={3} width="80%" {...newProps}>
      {para}
    </Stack>
  );
};

const SkeletonText = ({ children, isLoaded, ...props }: ISkeletonTextProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  return <NBSkeletonText {...props} />;
};

export default SkeletonText;
