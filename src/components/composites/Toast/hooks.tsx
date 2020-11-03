import * as React from 'react';
import type { IuseToast } from './props';

const currentState: any = {
  topcenter: [],
  topleft: [],
  topright: [],
  bottomcenter: [],
  bottomleft: [],
  bottomright: [],
};
export const useToastManager = () => {
  const [allToast, setAllToast] = React.useState({
    ...currentState,
  });
  const updateToast = ({
    position = 'bottom',
    duration = 5000,
    ...rest
  }: IuseToast) => {
    const verticalPostion = position.includes('top') ? 'top' : 'bottom';
    let horizontalPostion = 'center';
    if (position.includes('right')) horizontalPostion = 'right';
    else if (position.includes('left')) horizontalPostion = 'left';
    const postionKey = verticalPostion + horizontalPostion;

    // Removing Toast after 5sec (default)
    setTimeout(() => {
      currentState[postionKey].pop();
      setAllToast({ ...currentState });
    }, duration);

    currentState[postionKey].push({
      ...rest,
    });
    setAllToast({ ...currentState });
  };
  return [allToast, updateToast];
};

export const useToast = () => {
  const [, updateToast] = useToastManager();
  return updateToast;
};
