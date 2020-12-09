import React from 'react';
import { Button } from '../../primitives';
import type { IActionsheetItemProps } from './index';
import { omitUndefined } from '../../../theme/tools/utils';

const ActionsheetItem = ({ children, ...props }: IActionsheetItemProps) => {
  const newProps = omitUndefined(props);
  return (
    <Button bg="transparent" {...newProps}>
      {children}
    </Button>
  );
};

export default ActionsheetItem;
