import React, { useContext } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { ThemeContext } from '../../../theme';
import Icon from './../../primitives/Icon';
import type { ICloseButtonProps } from './props';

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
  size,
  rounded,
  isDisabled,
  onClick,
  ariaLabel,
  ...props
}: ICloseButtonProps) => {
  const theme = useContext(ThemeContext);
  let spaceValue = 2;
  if (size) {
    switch (size) {
      case 'sm':
        spaceValue = 5;
        break;
      case 'md':
        spaceValue = 6;
        break;
      case 'lg':
        spaceValue = 7;
        break;
      default:
        spaceValue = 6;
        break;
    }
  }

  const defaultOnPress = () => {};
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      opacity: isDisabled ? 0.5 : 1,
      alignItems: 'center',
      borderRadius: rounded,
    },
  ]);

  return (
    <StyledCloseButton
      disabled={isDisabled}
      rounded={rounded}
      onPress={onClick ? onClick : defaultOnPress}
      underlayColor={'rgba(255, 255, 255, 0.1)'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      accessibilityLabel={ariaLabel}
      activeOpacity={1}
      {...props}
    >
      <StyledView style={computedStyle}>
        <Icon
          name="close"
          type="MaterialIcons"
          fontSize={theme.fontSizes[spaceValue]}
          color={props.color}
        />
      </StyledView>
    </StyledCloseButton>
  );
};

export default CloseButton;
