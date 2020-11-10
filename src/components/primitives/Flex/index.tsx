import React from 'react';
import { Box, usePropsConfig } from '@native-base/v3';
import type { IFlexProps } from './props';

const Flex = ({
  style,
  direction,
  align,
  justify,
  basis,
  grow,
  shrink,
  ...props
}: IFlexProps) => {
  let newProps = usePropsConfig('Flex', props);
  return (
    <Box
      {...newProps}
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexGrow={grow}
      flexBasis={basis}
      flexShrink={shrink}
      style={style}
    />
  );
};

//Spacer Component that adds space between components where it is placed
export const Spacer = (props: any) => {
  return <Box flexGrow={1} {...props} />;
};

export { IFlexProps } from './props';
export default Flex;
