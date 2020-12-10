import type { ICollapseProps } from './props';
import { isNil } from 'lodash';
import React, { useEffect, useRef } from 'react'; //import  also
import { LayoutAnimation } from 'react-native';
import { Box } from '../../primitives';

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
    <Box style={animatedStyle} overflow="hidden">
      <Box overflow="scroll" {...props} />
    </Box>
  );
};

export default Collapse;
export { CollapseButton } from './CollapseButton';
