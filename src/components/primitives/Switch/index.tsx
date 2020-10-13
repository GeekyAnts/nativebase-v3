import React, { useState, useContext } from "react";
import { StyleSheet, ViewProps, ViewStyle, Switch } from "react-native";
import styled from "styled-components/native";
import { isNil } from "lodash";
import { ThemeContext } from "../../../theme";
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
} from "styled-system";

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
} from "../../../utils/customProps";

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
    size?: "lg" | "md" | "sm";
    onColor?: string;
    offColor?: string;
    isDisabled?: boolean;
    name?: string;
    onToggle?: any;
    colorScheme?: string;
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
  // ariaLabelledBy,
  ...props
}: ISwitchProps) => {
  const theme = useContext(ThemeContext);
  let switchSize: number = 1;
  if (size) {
    switch (size) {
      case "sm":
        switchSize = 0.5;
        break;
      case "lg":
        switchSize = 1.5;
        break;
      case "md":
      default:
        switchSize = 1;
        break;
    }
  }
  const [isActive, setIsActive] = useState(
    !isNil(defaultIsChecked) ? defaultIsChecked : false
  );
  const checked = !isNil(isChecked) ? isChecked : isActive;
  let computedStyle: ViewStyle | any = style;
  const marginFactor = 10;
  const inValidPropFactors = {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.danger[2],
  };

  computedStyle = StyleSheet.flatten([
    {
      transform: [{ scale: switchSize }],
      margin: switchSize > 1 ? switchSize * marginFactor : undefined,
    },
    style,
    isInvalid
      ? {
          ...inValidPropFactors,
        }
      : {},
  ]);

  return (
    <StyledNBSwitch
      trackColor={
        props.colorScheme
          ? { false: theme.colors.dark[0], true: props.colorScheme }
          : undefined
      }
      thumbColor={
        checked
          ? onColor
            ? onColor
            : undefined
          : offColor
          ? offColor
          : undefined
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
