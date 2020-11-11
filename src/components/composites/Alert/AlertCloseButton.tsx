import React from 'react';
import { Box, Icon } from '../../primitives';
import { AlertContext, IAlertContext } from './index';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertCloseButton = ({ children, ...props }: any) => {
  const newProps = omitUndefined(props);
  const { iconColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Box position="absolute" top={3} right={3}>
      {children || (
        <Icon
          name="close"
          type="MaterialCommunityIcons"
          color={iconColor}
          size={6}
          {...newProps}
        />
      )}
    </Box>
  );
};
export default AlertCloseButton;
