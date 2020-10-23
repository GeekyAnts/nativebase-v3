import React from 'react';
import { Text, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
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
  customTypography,
  customTypographyProps,
} from '../../../utils/customProps';

import { useStyleConfig } from '../../../theme';

export type IHeadingProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  customTypographyProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | JSX.Element[] | JSX.Element;
    isTruncated?: any;
  };

const StyledHeading = styled(Text)<IHeadingProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
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
