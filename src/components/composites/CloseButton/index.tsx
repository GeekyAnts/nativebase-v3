import React from 'react';
import { IIconButtonProps, IconButton, Icon } from '../../..';

export type ICloseButtonProps = IIconButtonProps;

const CloseButton = (props: ICloseButtonProps) => {
  return (
    <IconButton {...props} icon={<Icon name={'close'} size={props.size} />} />
  );
};

export default CloseButton;
