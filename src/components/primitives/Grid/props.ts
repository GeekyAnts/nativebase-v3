import type { IBoxProps } from '../../primitives';

export type IGridProps = IBoxProps & {
  gap?: number;
  templateColumns?: string;
  templateRows?: string;
  rowGap?: number;
  columnGap?: number;
  templateAreas?: string;
};
