import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import type { IToastProps } from './props';
import ToastList from './ToastList';
import { useToastManager } from './hooks';

const NBToast = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const [allToast] = useToastManager();

  const holderStyle: any = {
    top: {
      top: 0,
      right: 0,
      left: 0,
    },
    bottom: {
      bottom: 0,
      right: 0,
      left: 0,
    },
  };

  return (
    <>
      <Box
        position="absolute"
        style={holderStyle.top}
        backgroundColor="#FBB6CE"
      >
        <Box position="absolute" width="100%">
          <ToastList placement="top-left" toastList={allToast.topleft} />
        </Box>
        <Box position="absolute" width="100%">
          <ToastList placement="top-center" toastList={allToast.topcenter} />
        </Box>
        <Box position="absolute" width="100%">
          <ToastList placement="top-right" toastList={allToast.topright} />
        </Box>
      </Box>
      <Box
        position="absolute"
        style={holderStyle.bottom}
        backgroundColor="#a3bffa"
        justifyContent="flex-end"
        // height={50}
        zIndex={99999}
      >
        <Box position="absolute" width="100%">
          <ToastList placement="bottom-left" toastList={allToast.bottomleft} />
        </Box>
        <Box position="absolute" width="100%">
          <ToastList
            placement="bottom-center"
            toastList={allToast.bottomcenter}
          />
        </Box>
        <Box position="absolute" width="100%">
          <ToastList
            placement="bottom-right"
            toastList={allToast.bottomright}
          />
        </Box>
      </Box>
    </>
  );
};

const StyledToast = styled(NBToast)<IToastProps>(space);

const Toast = ({ children, ...props }: IToastProps) => {
  return <StyledToast {...props}>{children}</StyledToast>;
};

export default Toast;
