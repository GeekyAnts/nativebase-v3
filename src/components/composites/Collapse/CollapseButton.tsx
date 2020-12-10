import React from 'react';
import type { ICollapseButtonProps } from './props';
import { useCollapseButton } from './useCollapseButton';
import { Button } from '../../primitives';

export function CollapseButton(props: ICollapseButtonProps) {
  const collapseButtonProps = useCollapseButton(props);

  return (
    <Button {...collapseButtonProps}>{collapseButtonProps.children}</Button>
  );
}
