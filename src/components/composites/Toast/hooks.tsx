import React from 'react';
import type { IToastProps } from './props';

const currentState: any = {
  toasts: [],
};
export const useToastManager = () => {
  const [allToast, setAllToast] = React.useState({
    ...currentState,
  });
  const recursivelyTimeout = (duration: any) => {
    if (duration === 'long') {
      duration = 4000;
    } else if (!duration || duration === 'short') {
      duration = 2000;
    }
    setTimeout(() => {
      currentState.toasts.splice(0, 1);
      setAllToast({ ...currentState });
      if (currentState.toasts.length) {
        recursivelyTimeout(currentState.toasts[0].duration);
      }
    }, duration);
  };
  const updateToast = ({ position, duration, ...rest }: IToastProps) => {
    if (!currentState.toasts.length) {
      recursivelyTimeout(duration);
    }

    currentState.toasts.push({
      ...rest,
      position,
      duration,
    });
    setAllToast({ ...currentState });
  };
  return [allToast.toasts, updateToast];
};

export const useToast = () => {
  const [, updateToast] = useToastManager();
  return updateToast;
};
