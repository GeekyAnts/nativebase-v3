import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  TouchableHighlight,
  Text,
} from 'react-native';
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
import { ThemeContext } from '../../../theme';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg';
export type ICloseButtonProps = ViewProps &
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
    style?: ViewStyle | any;
    children?: any;
    highlight?: number | undefined | 0 | 1 | 0.5 | 0.25 | 0.75;
    highlightColor?: string | undefined;
    size?: SpaceType | string | undefined;
    isDisabled?: any | undefined;
    onClick?: any | undefined;
  };
const StyledView = styled(View)<ICloseButtonProps>(
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
const StyledCloseButton = styled(TouchableHighlight)<ICloseButtonProps>(
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
const CloseButton = ({
  style,
  highlight,
  highlightColor,
  size,
  p,
  pr,
  pt,
  pb,
  pl,
  px,
  py,
  rounded,
  isDisabled,
  onClick,
  ...props
}: ICloseButtonProps) => {
  const theme = useContext(ThemeContext);
  let spaceValue = 0;
  if (size) {
    switch (size) {
      case 'xs':
        spaceValue = 0;
        break;
      case 'sm':
        spaceValue = 2;
        break;
      case 'md':
        spaceValue = 3;
        break;
      case 'lg':
        spaceValue = 4;
        break;
      default:
        spaceValue = 2;
        break;
    }
  } else {
    spaceValue = 2;
  }

  const defaultOnPress = () => {};
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      opacity: isDisabled ? 0.5 : 1,
      backgroundColor: isDisabled ? '#f0f0f0' : 'transparent',
      alignItems: 'center',
      borderRadius: rounded ? rounded : 3,
    },
  ]);
  var textStyle: any = {
    color: props.color ? props.color : 'black',
    fontSize: theme.fontSizes[spaceValue],
  };
  return (
    <StyledCloseButton
      disabled={isDisabled ? true : false}
      rounded={rounded ? rounded : '3'}
      onPress={onClick ? onClick : defaultOnPress}
      activeOpacity={highlight ? highlight : 0.5}
      underlayColor={highlightColor ? highlightColor : '#f0f0f0'}
      style={{ height: 'auto', width: 'auto' }}
      {...props}
    >
      <StyledView
        p={p ? p : ''}
        pl={pl ? pl : ''}
        pr={pr ? pr : ''}
        pb={pb ? pb : ''}
        pt={pt ? pt : ''}
        px={px ? px : 1}
        py={py ? py : ''}
        style={computedStyle}
      >
        <Text style={textStyle}>⨉</Text>
      </StyledView>
    </StyledCloseButton>
  );
};

export default CloseButton;
