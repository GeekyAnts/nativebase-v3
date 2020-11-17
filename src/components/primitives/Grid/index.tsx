import React from 'react';
import Flex from '../Flex';
import type { IGridProps } from './props';
import type { IGridItemProps } from '../GridItem/props';
import { Box } from '..';

export default function Grid({
  children,
  templateColumns,
  templateRows,
  // gap,
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
  }

  return <></>;
}

const Col = ({ size, children, ...props }: any = { size: 1 }) => {
  return (
    <Flex direction="column" bg="#d1d1d1" flex={size} {...props}>
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
    <Box {...props} border="1px solid black">
      {props.children}
    </Box>
  );
}
