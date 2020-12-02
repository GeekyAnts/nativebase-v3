import React from 'react';
import { Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import type { IFlexProps } from './props';

const Flex = (
  {
    style,
    direction,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    ...props
  }: IFlexProps,
  ref: any
) => {
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
      flexWrap={wrap}
      style={style}
      ref={ref}
    />
  );
};

//Spacer Component that adds space between components where it is placed
export const Spacer = (props: any) => {
  return <Box flexGrow={1} {...props} />;
};

export { IFlexProps } from './props';
export default React.forwardRef(Flex);
