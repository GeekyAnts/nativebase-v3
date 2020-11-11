import React from 'react';
import { Button, IButtonProps } from '../../primitives';
import { usePropsConfig } from '../../../theme';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps) => {
  const newProps = usePropsConfig('IconButton', props);
  return <Button {...newProps}>{icon}</Button>;
};

export default IconButton;
