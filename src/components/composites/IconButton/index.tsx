import React from 'react';
import { Button, IButtonProps, usePropsConfig } from '../../..';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps) => {
  const newProps = usePropsConfig('IconButton', props);
  return <Button {...newProps}>{icon}</Button>;
};

export default IconButton;
