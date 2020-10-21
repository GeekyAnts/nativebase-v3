import type { IBoxProps } from 'native-base';

export type ISkeletonProps = IBoxProps & {
  isLoaded?: boolean;
  startColor?: string;
  endColor?: string;
};
export type ISkeletonCircleProps = ISkeletonProps & {
  size?: string | number;
};
export type ISkeletonTextProps = ISkeletonProps & {
  noOfLines?: number;
};
