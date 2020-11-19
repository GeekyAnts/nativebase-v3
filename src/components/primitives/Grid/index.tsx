import React, { useMemo, useRef } from 'react';
import Flex from '../Flex';
import type { IGridProps } from './props';
import type { IGridItemProps } from '../GridItem/props';
import { Box } from '..';
//@ts-ignore
import { grid } from 'grid-template-parser';

const get2DArray = (template: string) => {
  const rows = template.split('\n');
  let array2D: any = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].split(' ');
    array2D[i] = [];
    row.forEach((item: any) => {
      array2D[i].push(item.replace('"', ''));
    });
  }

  return array2D;
};

export default function Grid({
  children,
  templateColumns,
  templateRows,
  gap,
  columnGap,
  rowGap,
  templateAreas,
  ...props
}: IGridProps): JSX.Element {
  let cols = templateColumns ? templateColumns.split(' ').map(parseFloat) : [];
  let rows = templateRows ? templateRows.split(' ').map(parseFloat) : [];
  const templateIn2DArray = useMemo(() => get2DArray(templateAreas), [
    templateAreas,
  ]);

  const parsedTemplate = grid(templateAreas);
  const { width: colCount, height: rowCount } = parsedTemplate;
  let prevRowHeight: any = [];

  const gridItemsRef = useRef<any>({});

  const onLayoutChange = () => {
    recomputeLayout();
  };

  // Template areas
  const recomputeLayout = () => {
    let onHeightCalculationComplete = (areaHeightKeys: any) => {
      let rowHeight: any = [];
      for (let i = 0; i < templateIn2DArray.length; i++) {
        let maxHeightOfCurrentRow = 0;
        for (let j = 0; j < templateIn2DArray[i].length; j++) {
          const cell = templateIn2DArray[i][j];
          const currentRowSpan = parsedTemplate.areas[cell].row.span;
          const cellHeight = areaHeightKeys[cell] / currentRowSpan;
          // console.log('template areas ', templateIn2DArray[i][j]);

          if (cellHeight > maxHeightOfCurrentRow) {
            maxHeightOfCurrentRow = cellHeight;
          }
        }

        rowHeight[i] = maxHeightOfCurrentRow;
      }

      if (JSON.stringify(prevRowHeight) === JSON.stringify(rowHeight)) {
        return;
      }

      prevRowHeight = rowHeight;
      let top = 0;
      let topsOfEachCell: any = {};
      for (let j = 0; j < templateIn2DArray[0].length; j++) {
        topsOfEachCell[templateIn2DArray[0][j]] = 0;
      }

      for (let i = 1; i < templateIn2DArray.length; i++) {
        top += rowHeight[i - 1];
        for (let j = 0; j < templateIn2DArray[i].length; j++) {
          const cell = templateIn2DArray[i][j];
          if (topsOfEachCell[cell] === undefined) {
            topsOfEachCell[cell] = top;
          }
        }
      }

      // Set top of elements
      Object.keys(topsOfEachCell).forEach((key) => {
        gridItemsRef.current[key].setNativeProps({
          top: topsOfEachCell[key],
        });
      });

      // Set height of span elements
      Object.keys(parsedTemplate.areas).forEach((key) => {
        let rowStart = parsedTemplate.areas[key].row.start - 1;
        let rowEnd = parsedTemplate.areas[key].row.end - 1;
        let totalHeight = 0;
        for (let i = rowStart; i < rowEnd; i++) {
          totalHeight += rowHeight[i];
        }

        gridItemsRef.current[key].setNativeProps({
          height: totalHeight,
        });
      });
    };

    const areaKeys = Object.keys(parsedTemplate.areas);
    const heightOfAreas: any = {};
    areaKeys.forEach((key) => {
      gridItemsRef.current[key].measure(
        (_fx: any, _fy: any, _width: any, height: any, _px: any, _py: any) => {
          heightOfAreas[key] = height;
          if (Object.keys(heightOfAreas).length === areaKeys.length) {
            onHeightCalculationComplete(heightOfAreas);
          }
        }
      );
    });

    // for (let i = 0; i<templateIn2DArray.length; i++) {

    // for (let j = 0; j<templateIn2DArray.length; j++) {
    //   let
    //   heightOfAreas[]

    // }
    // }

    // setRecomputeLayout(false);
  };

  if (templateAreas) {
    // let templateAreasArr = templateAreas.split("")
    cols = Array(colCount).fill(1);
    rows = Array(rowCount).fill(1);
    const totalColumnSum = cols.reduce(
      (prevVal, currentVal) => currentVal + prevVal,
      0
    );

    // return null;
    return (
      <Row {...props}>
        {React.Children.map(children, (element) => {
          if (!React.isValidElement(element)) return null;

          const { area: gridAreaarea } = element.props as any;
          const area = parsedTemplate.areas[gridAreaarea];
          const colStart = area.column.start - 1;
          const rowStart = area.row.start - 1;
          const colEnd = area.column.end - 1;
          const rowEnd = area.row.end - 1;

          let colGrow = 0;

          let leftGrow = 0;
          for (let i = 0; i < colStart; i++) {
            leftGrow += cols[i];
          }

          for (let i = colStart; i < colEnd; i++) {
            colGrow += cols[i];
          }

          let widthVal = (100 * colGrow) / totalColumnSum;
          let leftVal = (100 * leftGrow) / totalColumnSum;

          const width = `${widthVal}%`;
          const left = `${leftVal}%`;

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
              border="1px solid red"
              // flex={4}
              onLayout={onLayoutChange}
              ref={(node: any) => {
                gridItemsRef.current = {
                  ...gridItemsRef.current,
                  [gridAreaarea]: node,
                };
                // if (!gridItemsRef.current[area]) {
                // gridItemsRef.current[area] = {} as any;
                // }
                // gridItemsRef.current[area] = node;
              }}
              // top={top}
              width={width}
              // flex={1}
              // border="1px solid black"
              // height={height}
              style={{ ...padding }}
            >
              {element}
            </Box>
          );
        })}
      </Row>
    );
  }

  // Auto rows
  else if (rows.length === 0 && cols.length > 0) {
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
              border="1px solid red"
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
