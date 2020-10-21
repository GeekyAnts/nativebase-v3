import { isNil } from 'lodash';
import React, { useEffect, useRef } from 'react'; //import  also
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

function usePrevious(value: any) {
  const ref = useRef();
  function updatePrevious(newVal: any) {
    ref.current = newVal;
  }
  useEffect(() => {
    updatePrevious(value);
  }, [value]);
  return { value: ref.current, updatePrevious };
}

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
  const CustomLayoutLinear = {
    duration: duration ? duration : 400,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
  const defaultStartHeight: any = isOpen
    ? endingHeight
    : startingHeight
    ? startingHeight
    : 0;
  let animatedStyle = { height: defaultStartHeight };
  const animateView = () => {
    if (onAnimationStart) {
      onAnimationStart();
    }
    animatedStyle = {
      height: isOpen ? endingHeight : defaultStartHeight,
    };
    let callback = onAnimationEnd ? onAnimationEnd : () => {};
    LayoutAnimation.configureNext(CustomLayoutLinear, callback());
  };

  let wasOpen = usePrevious(isOpen);
  if (!isNil(wasOpen.value) && wasOpen.value !== isOpen) {
    animateView();
    wasOpen.updatePrevious(isOpen);
  }
  return (
    <View style={animatedStyle}>
      <Box overflow="scroll" style={props.style} {...props} />
    </View>
  );
};

export default Collapse;
