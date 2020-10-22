import React from 'react';
import { ViewStyle, StyleSheet, Animated, Easing } from 'react-native';

import { Box, IBoxProps, TextProps, Text } from '../../..';
import styled from 'styled-components';
import { color, border } from 'styled-system';

export type ICircularProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
  value: number;
  size?: number;
  thickness?: number;
  color?: string;
  trackColor?: string;
  isIndeterminate?: any | undefined;
  max?: number;
  min?: number;
};

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(color, border);

const CircularProgress = ({
  value,
  size,
  isIndeterminate,
  thickness,
  color,
  trackColor,
  max,
  min,
  ...props
}: ICircularProgressProps) => {
  if (min) {
    value = value - min;
  }
  let defaultSize = 50;
  let defaultThickness = 5;
  if (size) {
    defaultSize = size;
  }
  if (thickness) {
    defaultThickness = thickness;
  }
  const degree: any = new Animated.Value(0);
  if (isIndeterminate) {
    Animated.loop(
      Animated.timing(degree, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }
  const styles = StyleSheet.create({
    firstProgressLayer: {
      width: defaultSize,
      height: defaultSize,
      borderWidth: defaultThickness,
      borderRadius: 100,
      position: 'absolute',
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: [{ rotateZ: '-135deg' }],
    },
    secondProgressLayer: {
      width: defaultSize,
      height: defaultSize,
      position: 'absolute',
      borderWidth: defaultThickness,
      borderRadius: 100,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: [{ rotateZ: '45deg' }],
    },
    offsetLayer: {
      width: defaultSize,
      height: defaultSize,
      position: 'absolute',
      borderWidth: defaultThickness,
      borderRadius: 100,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: [{ rotateZ: '-135deg' }],
    },
    animateStyle: {
      width: defaultSize,
      height: defaultSize,
      borderWidth: defaultThickness,
      borderRadius: 100,
      position: 'absolute',
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      transform: [
        {
          rotateZ: degree.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    },
  });
  let halfSide = (max ? (min ? max - min : max) : 100) / 2; // calculating the halfvalue of the progress according to min and max

  const propStyle = (percent: number, base_degrees: number) => {
    const rotateBy = base_degrees + (percent * 180) / halfSide;
    return {
      transform: [{ rotateZ: rotateBy + 'deg' }],
    };
  };

  const renderThirdLayer = (percent: number) => {
    if (percent > halfSide) {
      return (
        <Box
          borderColor={color ? color : 'green.4'}
          style={[
            styles.secondProgressLayer,
            propStyle(percent - halfSide, 45),
          ]}
        ></Box>
      );
    } else {
      return (
        <Box
          borderColor={trackColor ? trackColor : 'gray.2'}
          style={styles.offsetLayer}
        ></Box>
      );
    }
  };
  let firstProgressLayerStyle;
  if (value > halfSide) {
    firstProgressLayerStyle = propStyle(halfSide, -135);
  } else {
    firstProgressLayerStyle = propStyle(value, -135);
  }

  return (
    <Box
      height={defaultSize}
      width={defaultSize}
      rounded={100}
      borderWidth={defaultThickness}
      borderColor={trackColor ? trackColor : 'gray.2'}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {!isIndeterminate ? (
        <>
          <Box
            borderColor={color ? color : 'green.4'}
            style={[styles.firstProgressLayer, firstProgressLayerStyle]}
          ></Box>
          {renderThirdLayer(value)}
          <Box fontSize={size ? size / 4 : 14}>{props.children}</Box>
        </>
      ) : (
        <StyleAnimatedView
          borderColor={color}
          style={styles.animateStyle}
        ></StyleAnimatedView>
      )}
    </Box>
  );
};

export const CircularProgressLabel = (props: TextProps) => {
  return <Text {...props} />;
};

export default CircularProgress;
