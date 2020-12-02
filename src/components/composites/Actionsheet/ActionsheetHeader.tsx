import React from 'react';
import { Box } from '../../primitives';
import type { IActionsheetHeaderProps } from './index';
import { omitUndefined } from '../../../theme/tools/utils';

const ActionsheetHeader = ({ children, ...props }: IActionsheetHeaderProps) => {
  const newProps = omitUndefined(props);
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      fontSize="md"
      color="muted.200"
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default ActionsheetHeader;
