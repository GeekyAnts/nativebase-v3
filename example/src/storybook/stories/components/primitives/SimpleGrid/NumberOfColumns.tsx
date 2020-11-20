import { SimpleGrid, Box, Text, Flex } from '@native-base/v3';
import React from 'react';
import { grid } from 'grid-template-parser';
import { last } from 'lodash';
const testParsed = {
  width: 3,
  height: 1,
  areas: {
    d: {
      column: {
        start: 1,
        end: 2,
        span: 1,
      },
      row: {
        start: 1,
        end: 2,
        span: 1,
      },
    },
    e: {
      column: {
        start: 2,
        end: 3,
        span: 1,
      },
      row: {
        start: 1,
        end: 2,
        span: 1,
      },
    },
    k: {
      column: {
        start: 3,
        end: 4,
        span: 1,
      },
      row: {
        start: 1,
        end: 2,
        span: 1,
      },
    },
  },
};

const items = 20;
const data = Array(items).fill(0);
const template = `
"c t t g"
"d t t g"
"f f f g"
`;

// const parsed = grid(template);
// console.log('parsed ', JSON.stringify(parsed));

// export default function NumberOfColumnsSimpleGrid() {
//   return (
//     <Box height={120} width="100%">
//       <Row flex={4}>
//         <Col flex={3}>
//           <Row flex={1}>
//             <Col flex={1}>
//               <Row flex={1}>
//                 <Col flex={1}>C</Col>
//               </Row>
//               <Row flex={1}>
//                 <Col flex={1}>d</Col>
//               </Row>
//             </Col>
//             <Col flex={2}>t</Col>
//           </Row>
//           <Row flex={1}>
//             <Col flex={1}>F</Col>
//           </Row>
//         </Col>
//         <Col flex={1}>G</Col>
//       </Row>
//     </Box>
//   );
// }

// IMP testcase
// const templateArea = `"a k d g
// "a q q y"
// "a q q y"
// "j q q y"
// "o i n y"
// "o t t t"`;

// const templateArea = `"R R S T U U"
// "R R S T U U"
// "M M N O P Q"
// "F F G H I I"
// "F F G H I I"
// "A B C D E E"`;

const templateArea = `"A A C C E E F F G G H H I I J"
"A A C C E E L L G G H H I I J"
"B B D D K K L L G G O O T T V"
"B B D D I I M M N N O O T T V"
"S6 S6 D D S4 S4 M M N N O O Q R R"
"S6 S6 S5 S5 S4 S4 M M S3 S3 S1 S1 Q S2 S2"`;
// const templateArea = `"a b c"
// "d e f"`;

// const a = () => {
//   return (
//     <>
//       <Row>
//         <Col></Col>
//         <Col s=2></Col>
//         <Col s=1></Col>
//       </Row>
//       <Row></Row>
//       <Row></Row>
//     </>
//   );
// };
// const templateArea = `"k d d"
// "k l p"
// "q q p"
// "q q y"`;
// const templateArea = `"a"
// "a"
// "a"
// "j"`;

// const templateArea = `"p p k k"
// "h h h h"
// "s f f f"
// "s f f f"`;

let iterationCount = 0;

const getSubMatrix = ({ rowStart, rowEnd, colStart, colEnd, matrix }: any) => {
  let subMatrix: any = [];
  for (let i = rowStart; i < rowEnd; i++) {
    const subStartRowIndex = i - rowStart;
    subMatrix[i - rowStart] = [];
    for (let j = colStart; j < colEnd; j++) {
      const subStartColIndex = j - colStart;
      subMatrix[subStartRowIndex][subStartColIndex] = matrix[i][j];
    }
  }
  return subMatrix;
};

const get2DArray = (template: string) => {
  const rows = template.split('\n');
  let array2D: any = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].split(' ');
    array2D[i] = [];
    row.forEach((item: any) => {
      array2D[i].push(item.replaceAll('"', ''));
    });
  }

  return array2D;
};

const getTemplateFrom2DArray = (matrix: any) => {
  let template = '';
  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1) {
      template += `"${matrix[i].join(' ')}"`;
    } else {
      template += `"${matrix[i].join(' ')}"\n`;
    }
  }
  return template;
};

const recursionLogger = (...args: any) => {
  console.log(iterationCount, ...args);
};
let prevMatrix: any = null;

function getRowsAndColsFromTemplateAreas(templateArea: any) {
  const parsed = grid(templateArea);
  const matrix = get2DArray(templateArea);
  // console.log({ parsed, matrix });

  let rows = getRows(matrix, parsed);
  recursionLogger(iterationCount, 'rows ', rows);

  if (JSON.stringify(prevMatrix) === JSON.stringify(matrix)) {
    console.log('not supported matrix ', matrix);
    return rows;
  }

  prevMatrix = matrix;
  // if (iterationCount > 5) {
  //   recursionLogger('lag gae baahi ');
  //   return rows;
  // }

  iterationCount++;

  // recursionLogger('trying ending conditions ', Object.keys(parsed.areas).length);
  // if (rows.length === 1 && rows[0].end - rows[0].start === rows[0].span) {
  if (Object.keys(parsed.areas).length === 1) {
    rows[0].type = 'node';
    return rows;
  }

  let initialIndex = 0;
  for (let i = 0; i < rows.length; i++) {
    const subMatrix = matrix.slice(initialIndex, initialIndex + rows[i].span);
    const templateFrom2DArray = getTemplateFrom2DArray(subMatrix);
    // recursionLogger({ templateFrom2DArray, subMatrix });
    const subParsed = grid(templateFrom2DArray);
    const cols = getCols(subMatrix, subParsed);
    // recursionLogger({ cols }, 'wjn');
    // recursionLogger('sub bhi dekhlo ', subMatrix, cols);

    let children = cols.map((col: any) => {
      // recursionLogger('yaaayr 1', { subMatrix });

      const childMatrixRowStart = rows[i].start - 1;
      const childMatrixRowEnd = rows[i].end - 1;
      const childMatrixColStart = col.start - 1;
      const childMatrixColEnd = col.end - 1;

      // recursionLogger({
      //   childMatrixRowStart,
      //   childMatrixRowEnd,
      //   childMatrixColEnd,
      //   childMatrixColStart,
      // });
      const newSubMatrix = getSubMatrix({
        rowStart: childMatrixRowStart,
        rowEnd: childMatrixRowEnd,
        colStart: childMatrixColStart,
        colEnd: childMatrixColEnd,
        matrix,
      });

      recursionLogger('new child matrixes ', newSubMatrix);
      const newSubMatrixTemplate = getTemplateFrom2DArray(newSubMatrix);
      // recursionLogger('Idhar bhi dekhlo ', newSubMatrixTemplate);
      const templateTest = getRowsAndColsFromTemplateAreas(
        newSubMatrixTemplate
      );

      // recursionLogger({ templateTest });
      return {
        ...col,
        type: 'column',
        children: templateTest,
      };

      recursionLogger(
        {
          newSubMatrix,
        },
        'cwcdwd'
      );
    });

    rows[i].type = 'row';

    rows[i].children = children;
    initialIndex = initialIndex + rows[i].span;
  }

  // recursionLogger('UI', JSON.stringify(rows));

  return rows;
  // Generate rows
  // for (let i = 0; i < matrix.length; i = i + maxRowSpan)
  // console.log('max row span ', maxRowSpan);
}

const getRows = (matrix: any, parsed: any) => {
  console.log(' parsed ', JSON.stringify(parsed));
  let rows: any = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; ) {
      const cell = matrix[i][j];
      // console.log(' cell ', cell);

      const cellRowStart = parsed.areas[cell].row.start;
      const cellRowEnd = parsed.areas[cell].row.end;
      const cellRowSpan = parsed.areas[cell].row.span;
      const cellColumnSpan = parsed.areas[cell].column.span;
      // Initial Row push
      if (rows.length === 0) {
        rows.push({ ...parsed.areas[cell].row, cell });
        continue;
      }

      let lastRow = rows[rows.length - 1];
      // If Cell starting at same rows
      if (lastRow.start === cellRowStart) {
        // Neighbouring cell's span is greater.
        if (lastRow.span < cellRowSpan) {
          let start = lastRow.start;
          lastRow = parsed.areas[cell].row;
          lastRow.cell = cell;
          lastRow.start = start;
          rows[rows.length - 1] = lastRow;
        }
      }
      // Case for overlapping cells
      // e.g. look at p, a. p, q
      // "a k d d"
      // "a k l p"
      // "a q q p"
      // "j q q y"
      else if (cellRowStart < lastRow.end && cellRowEnd > lastRow.end) {
        let start = lastRow.start;
        lastRow = parsed.areas[cell].row;
        lastRow.cell = cell;
        lastRow.start = start;
        lastRow.end = cellRowEnd;
        lastRow.span = cellRowEnd - start;
        rows[rows.length - 1] = lastRow;
      }
      // Start a new row
      else if (cellRowStart >= lastRow.end) {
        rows.push({ ...parsed.areas[cell].row, cell });
      }

      j += cellColumnSpan;
    }
  }

  // console.log({ rows });

  return rows;
};

const getCols = (matrix: any, parsed: any) => {
  let cols: any = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const cell = matrix[j][i];
      const cellColStart = parsed.areas[cell].column.start;
      const cellColEnd = parsed.areas[cell].column.end;
      const cellColSpan = parsed.areas[cell].column.span;
      // Initial Col push
      if (cols.length === 0) {
        cols.push({ ...parsed.areas[cell].column, cell });
        continue;
      }

      let lastCol = cols[cols.length - 1];
      // console.log({ lastCol, rowLength: cols.length });
      // If Cell starting at same cols
      if (lastCol.start === cellColStart) {
        // Neighbouring cell's span is greater.
        if (lastCol.span < cellColSpan) {
          let start = lastCol.start;
          lastCol = parsed.areas[cell].column;
          lastCol.cell = cell;
          lastCol.start = start;
          cols[cols.length - 1] = lastCol;
        }
      }
      // Case for overlapping cells
      // e.g. look at p, a. p, q
      // "a k d d"
      // "a k l p"
      // "a q q p"
      // "j q q y"
      else if (cellColStart < lastCol.end && cellColEnd > lastCol.end) {
        let start = lastCol.start;
        lastCol = parsed.areas[cell].column;
        lastCol.cell = cell;
        lastCol.start = start;
        lastCol.end = cellColEnd;
        lastCol.span = cellColEnd - start;
        cols[cols.length - 1] = lastCol;
      }
      // Start a new column
      else if (cellColStart >= lastCol.end) {
        cols.push({ ...parsed.areas[cell].column, cell });
      }

      j += 1;
    }
  }

  // console.log({ cols });

  return cols;
};

export default function NumberOfColumnsSimpleGrid() {
  const template = getRowsAndColsFromTemplateAreas(templateArea);
  console.log('template ', JSON.stringify(template));
  const renderTemplate = (tree: any) => {
    return tree.map((node: any) => {
      if (node.type === 'node') {
        return (
          <Box
            bg={!node.cell.includes('S') ? '#d2d2d2' : null}
            flex={1}
            m={1}
            justifyContent="center"
            alignItems="center"
          >
            {node.cell.includes('S') ? '' : <Text>{node.cell}</Text>}
          </Box>
        );
      }

      if (node.type === 'row') {
        return <Row flex={node.span}>{renderTemplate(node.children)}</Row>;
      }

      if (node.type === 'column') {
        return <Col flex={node.span}>{renderTemplate(node.children)}</Col>;
      }
    });
  };

  return (
    <Box bg="#fff" flex={1} width="100%">
      {renderTemplate(template)}
    </Box>
  );
}
// Start with row of flex 1
// Put number of columns (start with largest colSpan element and divide columns to large colSpan - total Width)
//
const Col = ({ size, children, ...props }: any) => {
  return (
    <Flex direction="column" flex={size} {...props}>
      {children}
    </Flex>
  );
};

const Row = ({ size, children, ...props }: any) => {
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
