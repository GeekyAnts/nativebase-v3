import React from 'react';
import { Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import type { IAlertProps } from './props';

export const AlertContext = React.createContext({});

const Alert = ({ children, ...props }: IAlertProps) => {
  const { status, variant, iconColor, textColor, ...newProps } = usePropsConfig(
    'Alert',
    props
  );

  return (
    <AlertContext.Provider
      value={{
        status,
        variant,
        iconColor,
        textColor,
      }}
    >
      <Box
        py={3}
        px={3}
        minW="100%"
        position="relative"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        borderRadius="md"
        {...newProps}
      >
        {children}
      </Box>
    </AlertContext.Provider>
  );
};

export default Alert;
