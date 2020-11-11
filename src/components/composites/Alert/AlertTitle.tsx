import React from 'react';
import { Text } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { AlertContext, IAlertContext } from './index';

const AlertTitle = ({ children, ...props }: any) => {
  const newProps = usePropsConfig('AlertTitle', props);
  const { textColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Text mr={2} color={textColor} {...newProps}>
      {children}
    </Text>
  );
};
export default AlertTitle;
