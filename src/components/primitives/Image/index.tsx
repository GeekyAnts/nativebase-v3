import React, { useState } from 'react';
import { StyleSheet, Image, ImageProps, Text } from 'react-native';
import styled from 'styled-components';
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  flex,
  layout,
  space,
} from 'styled-system';
import { customBorder, customBorderProps } from '../../../utils/customProps';

export type NBImageProps = ImageProps &
  LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    boxSize?: number | undefined;
    alt?: string | undefined;
  };

const StyledImage = styled(Image)<NBImageProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NBImage = ({
  boxSize,
  style,
  height,
  width,
  alt,
  ...props
}: NBImageProps) => {
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    setAlternate(true);
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
    <StyledImage style={computedStyle} {...props} onError={onImageLoadError} />
  );
};

export default NBImage;
