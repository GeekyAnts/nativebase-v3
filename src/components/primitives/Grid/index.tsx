import React from 'react';
import Flex from '../Flex';
import Text from '../Text';
import type { IGridProps } from './props';

export default function Grid({
  //   children,
  templateColumns,
  templateRows,
}: IGridProps) {
  const cols = templateColumns.split(' ');
  const rows = templateRows.split(' ');
  return rows.map((rowSize) => {
    const parsedRowSize = parseInt(rowSize);
    return (
      <Row size={parsedRowSize}>
        {cols.map((colSize) => {
          const parsedColSize = parseInt(colSize);
          return (
            <Col size={parsedColSize}>
              <Text>{colSize}</Text>
            </Col>
          );
        })}
      </Row>
    );
  });
}

const Col = ({ size, children }: any = { size: 1 }) => {
  return (
    <Flex direction="column" bg="#d1d1d1" flex={size}>
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
