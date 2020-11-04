import React from 'react';
import { Button, IButtonProps, Icon, usePropsConfig } from 'native-base';

export type ICloseButtonProps = IButtonProps & { color?: string };

const CloseButton = ({ style, ...props }: ICloseButtonProps) => {
  const newProps = usePropsConfig('CloseButton', props);
  let { fontSize, color, ...buttonProps } = newProps;
  return (
    <Button variant="ghost" {...buttonProps} style={style}>
      <Icon
        name="close"
        type="MaterialIcons"
        fontSize={fontSize}
        color={color}
      />
    </Button>
  );
};

export default CloseButton;
