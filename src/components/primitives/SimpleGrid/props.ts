import type { IBoxProps } from '../Box';

export type ISimpleGridProps = IBoxProps & {
  spacing?: number;
  columns?: number;
};
