import React, { forwardRef } from 'react';
import { Button, IButtonProps } from '../../primitives';
import { usePropsConfig } from '../../../theme';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps, ref: any) => {
  const newProps = usePropsConfig('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
      {icon}
    </Button>
  );
};

export default forwardRef(IconButton);
