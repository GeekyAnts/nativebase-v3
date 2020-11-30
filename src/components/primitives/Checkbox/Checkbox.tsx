import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../../primitives';
import { Center } from '../../composites';
import { usePropsConfig } from '../../../theme';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import { CheckboxContext } from './CheckboxGroup';
import type { ICheckboxProps, ICheckboxContext } from './props';

const Checkbox = ({ children, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const {
    groupValueChangeHandler,
    value: cValue = [],
    ...context
  }: ICheckboxContext = React.useContext(CheckboxContext);
  const {
    activeColor,
    borderColor,
    iconColor,
    onChange,
    isIndeterminate,
    isChecked: pIsChecked,
    defaultIsChecked,
    isDisabled,
    value: pValue,
    ariaLabel,
    icon,
    size,
    ...newProps
  } = usePropsConfig('Checkbox', {
    ...context,
    ...formControlContext,
    ...props,
  });
  let isChecked = pIsChecked || cValue.includes(pValue);

  const [checkboxState, setCheckboxState] = React.useState(
    isChecked || defaultIsChecked
  );
  const pressHandler = () => {
    isChecked = !checkboxState;
    setCheckboxState(isChecked);
    if (!isIndeterminate) {
      groupValueChangeHandler && groupValueChangeHandler(pValue, isChecked);
      onChange && onChange(pValue, isChecked);
    }
  };

  const sizedIcon = () =>
    React.cloneElement(
      icon,
      {
        size,
        color: icon.props.color ? icon.props.color : iconColor,
      },
      icon.props.children
    );

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      accessible
      accessibilityLabel={ariaLabel}
      accessibilityRole="checkbox"
      ref={ref}
    >
      <Center {...newProps} flexDirection="row">
        <Center
          backgroundColor={checkboxState ? activeColor : 'transparent'}
          borderColor={checkboxState ? activeColor : borderColor}
          borderWidth={2}
          borderRadius={5}
        >
          {icon && checkboxState ? (
            sizedIcon()
          ) : (
            <Icon
              name="check-bold"
              type="MaterialCommunityIcons"
              size={size}
              color={iconColor}
              opacity={checkboxState ? 1 : 0}
            />
          )}
        </Center>
        {children}
      </Center>
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, ICheckboxProps>(Checkbox);
