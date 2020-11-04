import React from 'react';
import styled from 'styled-components/native';
import { Box, ToastCard } from 'native-base';
import { space } from 'styled-system';
import type { IToastListProps, IToastCardProps } from './props';

const NBToastList = ({
  placement: postion = 'bottom',
  toastList,
}: IToastListProps) => {
  const verticalPostion = postion.includes('top') ? 'top' : 'bottom';
  let alignItemsValue = 'center';
  if (postion.includes('right')) {
    alignItemsValue = 'flex-end';
  } else if (postion.includes('left')) {
    alignItemsValue = 'flex-start';
  }

  // TODO: Add animation
  // const [size, setSize] = React.useState(10000);

  // const provideSize = (layoutSize: any) => {
  //   if (postion === 'right' || postion === 'left') setSize(layoutSize.width);
  //   else setSize(layoutSize.height);
  // };

  // const slideAnim = React.useRef(new Animated.Value(size)).current;
  // const slideInFromBottom = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: 0,
  //     duration: duration,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: size,
  //     duration: duration,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const animatioStyle: any = {
  //   top: { transform: [{ translateY: slideAnim }] },
  //   right: { transform: [{ translateX: slideAnim }] },
  //   bottom: { transform: [{ translateY: slideAnim }] },
  //   left: { transform: [{ translateX: slideAnim }] },
  // };

  const toastListTemplate = () => {
    return toastList?.map((toastProps: IToastCardProps) => (
      <ToastCard {...toastProps} />
    ));
  };
  return (
    <Box
      width="100%"
      flexDirection={verticalPostion === 'top' ? 'column' : 'column-reverse'}
      justifyContent={verticalPostion === 'top' ? 'flex-start' : 'flex-end'}
      alignItems={alignItemsValue}
      m={0}
    >
      {toastListTemplate()}
    </Box>
  );
};

const StyledToast = styled(NBToastList)<IToastListProps>(space);
StyledToast.defaultProps = {};

const ToastList = ({ children, ...props }: IToastListProps) => {
  return <StyledToast {...props}>{children}</StyledToast>;
};

export default ToastList;
