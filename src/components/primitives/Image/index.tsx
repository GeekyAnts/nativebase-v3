import React, { useState } from 'react';
import { StyleSheet, Image as RNImage, Text } from 'react-native';
import styled from 'styled-components';
import { border, flex, layout, space } from 'styled-system';
import { customBorder } from '../../../utils/customProps';
import type { IImageProps } from './props';

const StyledImage = styled(RNImage)<IImageProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

const Image = ({
  boxSize,
  style,
  height,
  width,
  alt,
  fallbackSource,
  source,
  ignoreFallback,
  ...props
}: IImageProps) => {
  let [renderedSource, setSource] = useState(source);
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    if (
      !ignoreFallback &&
      fallbackSource &&
      fallbackSource !== renderedSource
    ) {
      setSource(fallbackSource);
    } else {
      setAlternate(true);
    }
  };
  let computedStyle = style;
  if (boxSize) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: boxSize,
        height: boxSize,
      },
    ]);
  } else {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: width ? width : 100,
        height: height ? height : 100,
      },
    ]);
  }
  if (alternate) {
    return <Text>{alt}</Text>;
  }
  return (
    <StyledImage
      style={computedStyle}
      source={renderedSource}
      {...props}
      onError={props.onError ? props.onError : onImageLoadError}
    />
  );
};

export default Image;
export { IImageProps };
