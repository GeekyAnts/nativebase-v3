import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import { border, color, layout, space, typography } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customTypography,
} from '../../../utils/customProps';

import { VStack, Box, IBoxProps, Text, IIconProps, Icon } from '../../..';
import type { IListProps } from './props';

const StyledList = styled(ScrollView)<ScrollViewProps>(
  color,
  space,
  layout,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customExtra,
  customLayout,
  customTypography
);
const List = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      { index: ind, ...props },
      child.props.children
    );
  });
  return (
    <StyledList {...props} style={style}>
      <VStack space={spacing} {...props}>
        {children}
      </VStack>
    </StyledList>
  );
};

export const ListItem = ({
  children,
  unordered,
  ul,
  ordered,
  ol,
  ...props
}: IBoxProps & {
  fontSize?: any;
  unordered?: boolean;
  ul?: boolean;
  ordered?: boolean;
  ol?: boolean;
  index?: any;
  start?: number;
}) => {
  const startNum = props.start ? props.start : 1; // Ordered list starting number
  return (
    <Box flexDirection="row" alignItems="center">
      <Box flexDirection="row" alignItems="center" {...props}>
        {unordered || ul ? ( //Adding disc in front of ListItem
          <Text
            mr={2}
            fontSize={props.fontSize}
            color={props.color}
            style={{ transform: [{ scale: 1.5 }] }}
          >
            {`\u2022`}
          </Text>
        ) : null}
        {ordered || ol ? ( //Adding index number in front of ListItem
          <Text mr={2} fontSize={props.fontSize} color={props.color}>
            {props.index + startNum + '.'}
          </Text>
        ) : null}
      </Box>
      <Box flexDirection="row" alignItems="center" {...props}>
        {children}
      </Box>
    </Box>
  );
};
export const ListIcon = (props: IIconProps) => {
  return <Icon mr={2} {...props} />;
};
export { IListProps } from './props';
export default List;
