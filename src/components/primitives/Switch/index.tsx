import React, { useState, useContext } from 'react';
import { StyleSheet, ViewStyle, Switch as RNSwitch } from 'react-native';
import styled from 'styled-components/native';
import { isNil } from 'lodash';
import { ThemeContext, usePropsConfig } from '../../../theme';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import type { ISwitchProps } from './props';

const StyledNBSwitch = styled(RNSwitch)<ISwitchProps>(
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

const Switch = ({
  style,
  onToggle,
  isDisabled,
  isInvalid,
  iosBgColor,
  isChecked,
  defaultIsChecked,
  ariaLabel,
  onColor,
  offColor,
  ...props
}: ISwitchProps) => {
  const [isActive, setIsActive] = useState(
    !isNil(defaultIsChecked) ? defaultIsChecked : false
  );
  const theme = useContext(ThemeContext);
  const checked = !isNil(isChecked) ? isChecked : isActive;
  const newProps = usePropsConfig('Switch', {
    ...props,
    checked,
    onColor,
    offColor,
  });
  const inValidPropFactors = {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.danger[2],
  };

  let computedStyle: ViewStyle = StyleSheet.flatten([
    style,
    isInvalid ? inValidPropFactors : {},
  ]);

  return (
    <StyledNBSwitch
      {...newProps}
      disabled={isDisabled}
      ios_backgroundColor={iosBgColor}
      onValueChange={onToggle ? onToggle : () => setIsActive(!isActive)}
      value={checked}
      style={computedStyle}
      accessibilityLabel={ariaLabel}
      accessibilityRole="switch"
    />
  );
};

export default Switch;
export { ISwitchProps } from './props';
