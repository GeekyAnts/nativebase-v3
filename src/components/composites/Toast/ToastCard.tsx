import React from 'react';
import { Box, Text, Icon, ThemeContext } from 'native-base';
import type { IToastCardProps } from './props';

const ToastCard = ({
  title,
  description,
  size = 'md',
  status = 'default',
  render,
  icon,
  ...props
}: IToastCardProps) => {
  const theme = React.useContext(ThemeContext);
  const activeColor = theme.colors[status];
  switch (size) {
    case 'sm':
      size = '40%';
      break;
    case 'md':
      size = '60%';
      break;
    case 'lg':
      size = '80%';
      break;
    case 'full':
      size = '100%';
      break;
  }

  return render ? (
    render()
  ) : (
    <Box
      m={2}
      p={4}
      borderRadius={5}
      backgroundColor={activeColor[0]}
      width={size}
      {...props}
    >
      <Box flexDirection="row" justifyContent="flex-start">
        {icon ? icon : <Icon name="infocirlce" type="AntDesign" size={6} />}
        <Box ml={2} flex={1}>
          <Text bold fontSize="md">
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ToastCard;
