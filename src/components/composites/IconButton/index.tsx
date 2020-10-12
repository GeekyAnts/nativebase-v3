import React from 'react';
import type { TextStyle } from 'react-native';

import { Button, IButtonProps, Icon, IconProps } from '../../..';

type iconProps = IconProps & {
  iconStyle?: TextStyle | {};
};

type IconButtonProps = IButtonProps & iconProps;

const IconButton = ({
  name,
  type,
  iconStyle,
  ...props
}: IconButtonProps & any) => {
  const iconButtonDefaultprops: IButtonProps = {
    borderRadius: 40,
    padding: 4,
    overflow: 'hidden',
  };

  return (
    <Button {...iconButtonDefaultprops} variant="ghost" {...props}>
      <Icon type={type} style={iconStyle} name={name} />
    </Button>
  );
};

export default IconButton;
