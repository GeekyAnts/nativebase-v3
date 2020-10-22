import React from 'react';
import { Text, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';
import { useStyleConfig } from '../../../theme';
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export type IHeadingProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | JSX.Element[] | JSX.Element;
    fontSize?: number;
    isTruncated?: any;
    size?: typeof sizes[number];
  };

const StyledHeading = styled(Text)<IHeadingProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const Heading = ({ isTruncated, ...props }: IHeadingProps) => {
  const { style, newProps } = useStyleConfig('Heading', props);
  return (
    <StyledHeading
      numberOfLines={isTruncated ? 1 : 999999}
      {...newProps}
      style={style}
    />
  );
};

export default Heading;
