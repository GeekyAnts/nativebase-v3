import React, { useState } from 'react';
import { Image as RNImage } from 'react-native';
import styled from 'styled-components';
import { border, flex, layout, space } from 'styled-system';
import { customBorder } from '../../../utils/customProps';
import { Text } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import type { IImageProps } from './props';

const StyledImage = styled(RNImage)<IImageProps>(
  layout,
  space,
  border,
  flex,
  customBorder
);

const Image = (
  {
    style,
    alt,
    fallbackSource,
    source,
    ignoreFallback,
    textProps,
    ...props
  }: IImageProps,
  ref: any
) => {
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
  const newProps = usePropsConfig('Image', props);
  if (alternate) {
    return <Text {...textProps}>{alt}</Text>;
  }
  return (
    <StyledImage
      style={style}
      source={renderedSource}
      {...newProps}
      onError={props.onError ? props.onError : onImageLoadError}
      ref={ref}
    />
  );
};

export default React.forwardRef(Image);
export { IImageProps } from './props';
