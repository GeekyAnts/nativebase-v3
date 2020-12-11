import React from 'react';
import { Slide } from '../Transitions';
import type { ISnackbarProps } from './props';

const Snackbar = ({ children, duration = 5000, ...props }: ISnackbarProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    isOpen &&
      setTimeout(() => {
        setIsOpen(false);
      }, duration);
  }, [isOpen, duration]);
  // const newProps = usePropsConfig('Snackbar', props);
  return (
    <Slide in={isOpen} {...props}>
      {children}
    </Slide>
  );
};

export default Snackbar;
