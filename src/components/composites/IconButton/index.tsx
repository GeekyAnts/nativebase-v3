import React, { useContext } from 'react';
import type { TextStyle } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Icon, IconProps } from '../../primitives';

import Button, { IButtonProps } from '../Button';

type iconProps = IconProps & {
  iconStyle?: TextStyle | {};
};

type IconButtonProps = IButtonProps & iconProps;

const IconButton = ({ name, type, iconStyle, ...props }: IconButtonProps) => {
  const theme: Theme = useContext(ThemeContext);

  const iconButtonDefaultprops: IButtonProps = {
    borderRadius: 40,
    padding: 4,
    overflow: 'hidden',
    highlightColor: theme.colors.white,
  };

  return (
    <Button {...iconButtonDefaultprops} variant="ghost" {...props}>
      <Icon type={type} style={iconStyle} name={name} />
    </Button>
  );
};

export default IconButton;
