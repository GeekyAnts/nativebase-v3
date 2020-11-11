import React from 'react';
import { Icon } from '../../primitives';
import { IIconButtonProps, IconButton } from '../../composites';

export type ICloseButtonProps = IIconButtonProps;

const CloseButton = (props: ICloseButtonProps) => {
  return (
    <IconButton {...props} icon={<Icon name={'close'} size={props.size} />} />
  );
};

export default CloseButton;
