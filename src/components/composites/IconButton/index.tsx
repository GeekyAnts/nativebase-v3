import React from 'react';
import type { TextStyle } from 'react-native';

import { Button, IButtonProps, Icon, IIconProps } from '../../..';

type IconProps = IIconProps & {
  iconStyle?: TextStyle;
  iconProps?: IIconProps;
};

type IconButtonProps = IButtonProps & IconProps;

const IconButton = ({
  name,
  type,
  iconStyle,
  iconProps,
  ...props
}: IconButtonProps & any) => {
  const iconButtonDefaultprops: IButtonProps = {
    borderRadius: 40,
    padding: 4,
    overflow: 'hidden',
  };

  return (
    <Button {...iconButtonDefaultprops} variant="ghost" {...props}>
      <Icon type={type} name={name} {...iconProps} style={iconStyle} />
    </Button>
  );
};

export default IconButton;
