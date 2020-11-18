import React from 'react';
import Flex from '../Flex';
import type { ISimpleGridProps } from './props';
// const isDebug = process.env.NODE_ENV !== 'production';

const DEBUG_STYLES = false
  ? {
      rows: {
        border: '1px solid black',
      },
      cols: {
        border: '1px solid red',
      },
    }
  : {
      rows: {},
      cols: {},
    };

export default function SimpleGrid({
  columns,
  spacing,
  minChildWidth,
  children,
}: ISimpleGridProps): JSX.Element {
  let cellSpacing = spacing ?? 0;

  const childrenArray = React.Children.toArray(children);
  if (columns) {
    let rowSlices = [];
    for (let i = 0; i < childrenArray.length; i = i + columns) {
      rowSlices.push(childrenArray.slice(i, i + columns));
    }

    return (
      <>
        {rowSlices.map((row, rowIndex) => {
          return (
            <Row flexWrap="wrap" key={rowIndex} mx={-1 * cellSpacing}>
              {row.map((col, colIndex) => {
                return (
                  <Col
                    {...DEBUG_STYLES.cols}
                    m={cellSpacing}
                    flex={1}
                    key={colIndex}
                  >
                    {col}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </>
    );
  } else if (minChildWidth) {
    return (
      <Row {...DEBUG_STYLES.rows} flexWrap="wrap" mx={-1 * cellSpacing}>
        {childrenArray.map((col, colIndex) => {
          return (
            <Col
              {...DEBUG_STYLES.cols}
              key={colIndex}
              margin={cellSpacing}
              flex={1}
              style={{
                minWidth: minChildWidth,
              }}
            >
              {col}
            </Col>
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
