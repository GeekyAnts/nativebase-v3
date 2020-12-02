import React from 'react';
import { Box, Button, Icon } from '../../primitives';
import { AlertContext, IAlertContext } from './index';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertCloseButton = ({ children, ...props }: any) => {
  const newProps = omitUndefined(props);
  const { iconColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Box position="absolute" top={3} right={3}>
      <Button variant="unstyled" {...newProps}>
        {children || (
          <Icon
            name="close"
            type="MaterialCommunityIcons"
            color={iconColor}
            size={6}
          />
        )}
      </Button>
    </Box>
  );
};
export default AlertCloseButton;
