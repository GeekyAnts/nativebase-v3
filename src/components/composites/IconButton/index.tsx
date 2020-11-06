import React from 'react';
import { Button, IButtonProps, usePropsConfig } from 'native-base';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps) => {
  const newProps = usePropsConfig('IconButton', props);
  return (
    <Button variant="ghost" {...newProps}>
      {icon}
    </Button>
  );
};

export default IconButton;
