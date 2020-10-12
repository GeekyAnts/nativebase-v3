import React from 'react';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';
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
import { Box } from '../../primitives';
import { theme } from '../../../theme';

type SpaceType = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IProgressProps = ViewProps &
  ColorProps &
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
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[];
    value?: number | undefined;
    size?: SpaceType | string | undefined;
    colorScheme?: string | undefined;
    isIndeterminate?: any | undefined;
  };

let successStyle = {
  backgroundColor: theme.colors.success[2],
};
let dangerStyle = {
  backgroundColor: theme.colors.danger[2],
};
let warningStyle = {
  backgroundColor: theme.colors.warning[2],
};
let darkStyle = {
  backgroundColor: theme.colors.dark[2],
};
let lightStyle = {
  backgroundColor: theme.colors.light[2],
};
let mutedStyle = {
  backgroundColor: theme.colors.muted[2],
};
let defaultStyle = {
  backgroundColor: theme.colors.default[2],
};

const StyledProgress = styled(View)<IProgressProps>(
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

const Progress = ({ value, size, ...props }: IProgressProps) => {
  let spaceValue = 0;
  let customSize: string = '';
  if (size) {
    switch (size) {
      case '2xs':
        spaceValue = 1;
        break;
      case 'xs':
        spaceValue = 2;
        break;
      case 'sm':
        spaceValue = 3;
        break;
      case 'md':
        spaceValue = 4;
        break;
      case 'lg':
        spaceValue = 6;
        break;
      case 'xl':
        spaceValue = 7;
        break;
      case '2xl':
        spaceValue = 8;
        break;
      default:
        spaceValue = 1;
        customSize = size;
        break;
    }
  } else {
    spaceValue = 2;
  }
  let barBgColor = { backgroundColor: theme.colors.default[0] };
  if (props.colorScheme) {
    switch (props.colorScheme) {
      case 'success':
      case 'green':
        barBgColor = successStyle;
        break;
      case 'danger':
      case 'red':
        barBgColor = dangerStyle;
        break;
      case 'warning':
      case 'yellow':
        barBgColor = warningStyle;
        break;
      case 'light':
      case 'white':
        barBgColor = lightStyle;
        break;
      case 'dark':
      case 'black':
        barBgColor = darkStyle;
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        barBgColor = mutedStyle;
        break;
      default:
        barBgColor = defaultStyle;
    }
  }
  if (barBgColor == defaultStyle && props.colorScheme) {
    barBgColor = { backgroundColor: props.colorScheme };
  }
  let mainBg = '#eaeaea';
  if (props.bg) {
    mainBg = props.bg;
  } else if (props.backgroundColor) {
    mainBg = props.backgroundColor;
  }
  let mainW = '100%';
  if (props.w) {
    mainW = props.w;
  } else if (props.width) {
    mainW = props.width + '';
  }

  let computedStyle: any = barBgColor;

  computedStyle = StyleSheet.flatten([barBgColor, {}]);

  return (
    <StyledProgress
      {...props}
      height={customSize === '' ? theme.space[spaceValue] : customSize}
      w={mainW}
      bg={mainBg}
      style={props.style}
    >
      <Box
        shadow={0}
        rounded={props.rounded}
        style={computedStyle}
        w={value + '%'}
        height={customSize === '' ? theme.space[spaceValue] : customSize}
        bg="red.0"
      />
    </StyledProgress>
  );
};

export default Progress;
