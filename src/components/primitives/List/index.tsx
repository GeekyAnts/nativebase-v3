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
  children = React.Children.map(children, (child: any) => {
    return React.cloneElement(child, props, child.props.children);
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
  isStyled,
  ...props
}: IBoxProps & { isStyled?: boolean; fontSize?: any }) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <Box flexDirection="row" alignItems="center" {...props}>
        {isStyled ? ( //Adding disc in front of ListItem
          <Text
            mr={2}
            fontSize={props.fontSize}
            color={props.color}
            style={{ transform: [{ scale: 1.5 }] }}
          >{`\u2022`}</Text>
        ) : (
          <></>
        )}
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
