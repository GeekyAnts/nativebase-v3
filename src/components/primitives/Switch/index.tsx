import React, { useState } from 'react';
import { StyleSheet, ViewProps, ViewStyle, Switch } from 'react-native';
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

export type INBSwitchProps = ViewProps &
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
    isEnabled?: boolean | undefined;
    toggleSwitch?: any;
    switchTrackColor?: undefined | string;
    onColor?: undefined | string;
    offColor?: undefined | string;
    iosBgColor?: undefined | string;
    size?: 'lg' | 'md' | 'sm' | number | undefined;
  };

const StyledNBSwitch = styled(Switch)<INBSwitchProps>(
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
const NBSwitch = ({
  style,
  toggleSwitch,
  isEnabled,
  onColor,
  offColor,
  iosBgColor,
  size,
  ...props
}: INBSwitchProps) => {
  let switchSize: 'lg' | 'md' | 'sm' | number | undefined = 1;
  if (size) {
    if (typeof size == 'string') {
      switch (size) {
        case 'sm':
          switchSize = 0.7;
          break;
        case 'md':
          switchSize = 1.2;
          break;
        case 'lg':
          switchSize = 2.2;
          break;

        default:
          switchSize = 1;
          break;
      }
    } else if (typeof size == 'number') {
      switchSize = size;
    }
  }
  const [isActive, setIsActive] = useState(false);
  const checked = isEnabled ? isEnabled : isActive;
  let computedStyle: ViewStyle | any = style;
  computedStyle = StyleSheet.flatten([
    style,
    { transform: [{ scale: switchSize }] },
  ]);

  return (
    <StyledNBSwitch
      trackColor={
        props.switchTrackColor
          ? { false: '#767577', true: props.switchTrackColor }
          : { false: '#767577', true: '#302c58' }
      }
      thumbColor={
        checked
          ? onColor
            ? onColor
            : '#64a68d'
          : offColor
          ? offColor
          : '#f4f8f6'
      }
      ios_backgroundColor={iosBgColor ? iosBgColor : '#3e3e3e'}
      onValueChange={toggleSwitch ? toggleSwitch : () => setIsActive(!isActive)}
      value={checked}
      {...props}
      style={computedStyle}
    />
  );
};

export default NBSwitch;
