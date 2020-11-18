import React from 'react';
import { FlatList } from 'react-native';
import { Box } from '..';
import type { ISimpleGridProps } from './props';

export default function SimpleGrid({
  columns,
  spacing,
  children,
}: ISimpleGridProps) {
  const childrenArray = React.Children.toArray(children);
  const dummyData = Array(childrenArray.length).fill(0);
  //   const numberOfRows = Math.ceil(dummyData.length / columns);
  if (!columns) {
    return null;
  }

  return (
    <FlatList
      numColumns={columns}
      data={dummyData}
      renderItem={({ index }) => {
        const temp1 = index % columns;
        const temp2 = Math.floor(index / columns);
        const isFirstCol = temp1 === 0 ? true : false;
        // const isLastCol = temp1 === columns - 1 ? true : false;
        const isFirstRow = temp2 === 0 ? true : false;
        // const isLastRow = temp2 === numberOfRows - 1 ? true : false;
        spacing = spacing ?? 0;
        let padding = {
          paddingTop: spacing,
          paddingLeft: spacing,
        };

        if (isFirstRow) {
          padding.paddingTop = 0;
        }
        if (isFirstCol) {
          padding.paddingLeft = 0;
        }

        return <Box style={{ ...padding }}>{childrenArray[index]}</Box>;
      }}
      keyExtractor={(_data, index) => {
        // const key = childrenArray[index].props.listId ?? index;
        return index.toString();
      }}
    />
  );
}

// const Col = ({ size, children, ...props }: any = { size: 1 }) => {
//   return (
//     <Flex direction="column" flex={size} {...props}>
//       {children}
//     </Flex>
//   );
// };

// const Row = ({ size, children, ...props }: any = { size: 1 }) => {
//   return (
//     <Flex direction="row" flex={size} {...props}>
//       {children}
//     </Flex>
//   );
// };
