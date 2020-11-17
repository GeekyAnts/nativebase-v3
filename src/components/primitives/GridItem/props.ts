import type * as CSS from 'csstype';
import type { IBoxProps } from '../../primitives';

export type IGridProps = IBoxProps & {
  gap?: CSS.Property.Gap;
  rowSpan?: CSS.Property.ColumnSpan;
  colSpan?: CSS.Property.ColumnSpan;
  colStart?: CSS.Property.GridColumnStart;
  colEnd?: CSS.Property.GridColumnEnd;
};
