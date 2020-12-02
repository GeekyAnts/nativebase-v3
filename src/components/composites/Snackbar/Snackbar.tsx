import React from 'react';
import { Slide } from '../../composites';
import type { ISnackbarProps } from './props';

const Snackbar = ({ children, duration = 5000, ...props }: ISnackbarProps) => {
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    isVisible &&
      setTimeout(() => {
        setIsVisible(false);
      }, duration);
  }, [isVisible, duration]);
  // const newProps = usePropsConfig('Snackbar', props);
  return (
    <Slide in={isVisible} {...props}>
      {children}
    </Slide>
  );
};

export default Snackbar;
