import type * as CSS from 'csstype';
import type { IBoxProps } from '../../primitives';

export type IGridProps = IBoxProps & {
  gap?: CSS.Property.Gap;
  templateColumns: string;
  templateRows: string;
};
