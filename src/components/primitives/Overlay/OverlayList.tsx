import React from 'react';
import { Box } from '../../primitives';
import { OverlayContext, IOverlayListProps } from './index';

const OverlayList = ({
  placement = 'bottom',
  overlayList,
}: IOverlayListProps) => {
  const context = React.useContext(OverlayContext);

  const verticalPostion = placement.includes('top') ? 'top' : 'bottom';
  let alignItemsValue = 'center';
  if (placement.includes('right')) {
    alignItemsValue = 'flex-end';
  } else if (placement.includes('left')) {
    alignItemsValue = 'flex-start';
  }

  // TODO: Add animation
  // const [size, setSize] = React.useState(10000);

  // const provideSize = (layoutSize: any) => {
  //   if (placement === 'right' || placement === 'left') setSize(layoutSize.width);
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

  const overlayListTemplate = () => {
    return overlayList?.map((overlayItem) => overlayItem);
  };
  console.log('overlayList = ', overlayList);

  return (
    <Box
      width="100%"
      flexDirection={verticalPostion === 'top' ? 'column' : 'column-reverse'}
      justifyContent={verticalPostion === 'top' ? 'flex-start' : 'flex-end'}
      alignItems={alignItemsValue}
    >
      {/* {overlayListTemplate()} */}
      {overlayList}
    </Box>
  );
};

export default OverlayList;
