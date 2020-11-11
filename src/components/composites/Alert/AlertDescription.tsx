import React from 'react';
import { Text, usePropsConfig } from 'native-base';
import { AlertContext, IAlertContext } from './index';

const AlertDescription = ({ children, ...props }: any) => {
  const newProps = usePropsConfig('AlertDescription', props);
  const { textColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Text color={textColor} {...newProps}>
      {children}
    </Text>
  );
};
export default AlertDescription;
