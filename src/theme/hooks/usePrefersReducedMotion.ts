import * as React from 'react';
import { AccessibilityInfo } from 'react-native';

export function usePrefersReducedMotion() {
  const [isReduceMotionEnabled, setIsReduceMotionEnabled] = React.useState(
    false
  );
  React.useEffect(() => {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      handleReduceMotionToggled
    );
    AccessibilityInfo.isReduceMotionEnabled().then((res: boolean) => {
      setIsReduceMotionEnabled(res);
    });
  });
  const handleReduceMotionToggled = (res: boolean) => {
    setIsReduceMotionEnabled(res);
  };
  return isReduceMotionEnabled;
}
