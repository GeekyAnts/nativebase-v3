import React, { useState, useContext } from 'react';
import { StyleSheet, ViewProps, ViewStyle, Switch } from 'react-native';
import styled from 'styled-components/native';
import { isNil } from 'lodash';
import { ThemeContext } from '../../../theme';
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

export type ISwitchProps = ViewProps &
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
    size?: 'lg' | 'md' | 'sm' | number;
    onColor?: string;
    offColor?: string;
    isDisabled?: boolean;
    name?: string;
    onToggle?: any;
    switchTrackColor?: string;
    iosBgColor?: string;
    isChecked?: boolean;
    defaultIsChecked?: boolean;
    isInvalid?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
  };

const StyledNBSwitch = styled(Switch)<ISwitchProps>(
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
  size,
  onToggle,
  isDisabled,
  isInvalid,
  onColor,
  offColor,
  iosBgColor,
  isChecked,
  defaultIsChecked,
  ariaLabel,
  ariaLabelledBy,
  ...props
}: ISwitchProps) => {
  const theme = useContext(ThemeContext);
  let switchSize: 'lg' | 'md' | 'sm' | number | undefined = 1;
  if (size) {
    if (typeof size === 'string') {
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
    } else if (typeof size === 'number') {
      switchSize = size;
    }
  }
  const [isActive, setIsActive] = useState(
    !isNil(defaultIsChecked) ? defaultIsChecked : false
  );
  const checked = !isNil(isChecked) ? isChecked : isActive;
  let computedStyle: ViewStyle | any = style;
  computedStyle = StyleSheet.flatten([
    style,
    { transform: [{ scale: switchSize }] },
    isInvalid
      ? {
          borderWidth: 1,
          borderColor: theme.colors.danger[2],
          borderRadius: 16,
        }
      : {},
  ]);

  return (
    <StyledNBSwitch
      trackColor={
        props.switchTrackColor
          ? { false: theme.colors.dark[0], true: props.switchTrackColor }
          : undefined
      }
      thumbColor={
        checked
          ? onColor
            ? onColor
            : theme.colors.default[0]
          : offColor
          ? offColor
          : theme.colors.default[1]
      }
      disabled={isDisabled}
      ios_backgroundColor={iosBgColor}
      onValueChange={onToggle ? onToggle : () => setIsActive(!isActive)}
      // might need to add onChange
      // onChange={(e: any) => { console.log(e)}}
      value={checked}
      {...props}
      style={computedStyle}
      accessibilityLabel={ariaLabel}
      accessibilityRole="switch"
      // TODO: could not find appropriate props for ariaLabelledBy
    />
  );
};

export default NBSwitch;
