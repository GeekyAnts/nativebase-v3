import React from 'react';
import Flex from '../Flex';
import type { IGridProps } from './props';
import type { IGridItemProps } from '../GridItem/props';
import { Box } from '..';

export default function Grid({
  children,
  templateColumns,
  templateRows,
  gap,
  columnGap,
  rowGap,
  ...props
}: IGridProps): JSX.Element {
  const cols = templateColumns
    ? templateColumns.split(' ').map(parseFloat)
    : [];
  const rows = templateRows ? templateRows.split(' ').map(parseFloat) : [];

  // Auto rows
  if (rows.length === 0 && cols.length > 0) {
    const totalColumnSum = cols.reduce(
      (prevVal, currentVal) => currentVal + prevVal,
      0
    );

    let currentCol = 0;

    return (
      <Row flexWrap="wrap" {...props}>
        {React.Children.map(children, (element) => {
          if (!React.isValidElement(element)) return null;

          let { colSpan } = element.props as any;
          colSpan = colSpan ? colSpan : 1;
          const colEnd = Math.min(currentCol + colSpan, cols.length);
          let grow = 0;

          for (let i = currentCol; i < colEnd; i++) {
            grow += cols[i];
          }

          let widthVal = (100 * grow) / totalColumnSum;

          const width = `${widthVal}%`;

          currentCol = currentCol + colSpan;

          if (currentCol === cols.length) {
            currentCol = 0;
          }

          return <Col width={width}>{element}</Col>;
        })}
      </Row>
    );
  } else if (rows.length > 0 && cols.length > 0) {
    const totalColumnSum = cols.reduce(
      (prevVal, currentVal) => currentVal + prevVal,
      0
    );
    const totalRowSum = rows.reduce(
      (prevVal, currentVal) => currentVal + prevVal,
      0
    );
    let currentCol = 0;
    let currentRow = 0;

    return (
      <Row flexWrap="wrap" {...props}>
        {React.Children.map(children, (element) => {
          if (!React.isValidElement(element)) return null;

          let { colStart, rowStart, colEnd, rowEnd } = element.props as any;

          let colGrow = 0;
          let rowGrow = 0;

          let topGrow = 0;
          let leftGrow = 0;
          for (let i = 0; i < colStart; i++) {
            leftGrow += cols[i];
          }

          for (let i = 0; i < rowStart; i++) {
            topGrow += rows[i];
          }

          for (let i = colStart; i < colEnd; i++) {
            colGrow += cols[i];
          }

          for (let i = rowStart; i < rowEnd; i++) {
            rowGrow += rows[i];
          }

          let widthVal = (100 * colGrow) / totalColumnSum;
          let heightVal = (100 * rowGrow) / totalRowSum;

          let topVal = (100 * topGrow) / totalRowSum;
          let leftVal = (100 * leftGrow) / totalColumnSum;

          const width = `${widthVal}%`;
          const height = `${heightVal}%`;
          const top = `${topVal}%`;
          const left = `${leftVal}%`;

          console.log('element ', {
            rowStart,
            rowEnd,
            colStart,
            colEnd,
            element,
            left,
            top,
          });

          if (currentRow === rows.length) {
            currentRow = 0;
          }

          if (currentCol === cols.length) {
            currentCol = 0;
          }

          gap = gap ?? 0;
          rowGap = rowGap ?? gap;
          columnGap = columnGap ?? gap;

          let padding = {
            paddingTop: rowGap,
            paddingBottom: rowGap,
            paddingLeft: columnGap,
            paddingRight: columnGap,
          };

          if (rowStart === 0) {
            padding.paddingTop = 0;
          }

          if (colStart === 0) {
            padding.paddingLeft = 0;
          }

          if (rowEnd === rows.length) {
            padding.paddingBottom = 0;
          }

          if (colEnd === cols.length) {
            padding.paddingRight = 0;
          }

          return (
            <Box
              position="absolute"
              left={left}
              top={top}
              width={width}
              height={height}
              style={{ ...padding }}
            >
              {element}
            </Box>
          );
        })}
      </Row>
    );
  }

  return <></>;
}

const Col = ({ size, children, ...props }: any = { size: 1 }) => {
  return (
    <Flex direction="column" flex={size} {...props}>
      {children}
    </Flex>
  );
};

const Row = ({ size, children, ...props }: any = { size: 1 }) => {
  return (
    <Flex direction="row" flex={size} {...props}>
      {children}
    </Flex>
  );
};

export function GridItem(props: IGridItemProps) {
  return (
    <Box flex={1} bg="#d1d1d1" {...props}>
      {props.children}
    </Box>
  );
}
