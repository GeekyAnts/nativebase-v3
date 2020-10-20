import React from 'react'; //import { useEffect, useRef } also
import { ViewStyle, LayoutAnimation, View } from 'react-native';

import { Box, IBoxProps } from '../../primitives';

const functionType = () => {};

export type ICollapseProps = IBoxProps & {
  style?: ViewStyle;
  endingHeight?: number;
  startingHeight?: number;
  duration?: number;
  animateOpacity?: boolean;
  isOpen?: boolean;
  onAnimationEnd?: any;
  onAnimationStart?: typeof functionType;
};

const Collapse = ({
  endingHeight,
  startingHeight,
  duration,
  // animateOpacity,
  isOpen,
  onAnimationEnd,
  onAnimationStart,
  ...props
}: ICollapseProps) => {
  var CustomLayoutLinear = {
    duration: duration ? duration : 400,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
  let defaultStartHeight: any = startingHeight ? startingHeight : 0;
  let animatedStyle = { height: defaultStartHeight };

  // const isFirstRun = useRef(true);

  let animateView = () => {
    if (onAnimationStart) {
      onAnimationStart();
    }
    let callback = onAnimationEnd ? onAnimationEnd : () => {};
    LayoutAnimation.configureNext(CustomLayoutLinear, callback());
    animatedStyle = {
      height: isOpen ? endingHeight : defaultStartHeight,
    };
  };
  // useEffect(() => {
  //   if (isFirstRun.current) {
  //     isFirstRun.current = false;
  //     return;
  //   }
  //   animateView();
  // }, [animateView(), isOpen]);

  animateView(); // Comment this line and uncomment other comments
  return (
    <View style={animatedStyle}>
      <Box overflow="scroll" style={props.style} {...props}></Box>
    </View>
  );
};

export default Collapse;
