import * as React from 'react';
import type { IuseOverlay } from './props';

const currentState: any = {
  'top': [],
  'top-left': [],
  'top-right': [],
  'bottom': [],
  'bottom-left': [],
  'bottom-right': [],
};
export const useOverlayManager = () => {
  const [componentsOnOverlay, setComponentOnOverlay] = React.useState({
    ...currentState,
  });
  const updateOverlay = ({
    component,
    placement = 'bottom',
    duration = 5000,
    ...rest
  }: IuseOverlay) => {
    // const verticalPostion = placement.includes('top') ? 'top' : 'bottom';
    // let horizontalPostion = 'center';
    // if (placement.includes('right')) horizontalPostion = 'right';
    // else if (placement.includes('left')) horizontalPostion = 'left';
    // const postionKey = verticalPostion + horizontalPostion;

    // Removing Overlay after 5sec (default)
    // console.log('inside updateOverlay - ', component);
    console.log('updateOverlay');

    setTimeout(() => {
      currentState[placement].pop();
      setComponentOnOverlay({ ...currentState });
    }, duration);

    currentState[placement].push(component);
    setComponentOnOverlay({ ...currentState });
  };
  return [componentsOnOverlay, updateOverlay];
};

export const useOverlay = () => {
  const [, updateOverlay] = useOverlayManager();
  type placementType =
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right';
  const addComponentOnOverlay = (
    component: React.ReactNode,
    placement?: placementType,
    duration?: number
  ) => {
    updateOverlay({ component, placement, duration });
  };
  return { addComponentOnOverlay };
};
