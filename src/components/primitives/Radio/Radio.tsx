import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { RadioContext } from './RadioGroup';
import type { IRadioProps, IRadioContext } from './props';

const Radio = ({ children, ...props }: IRadioProps, ref: any) => {
  const {
    onChangeHandler,
    value: cValue,
    ...context
  }: IRadioContext = React.useContext(RadioContext);
  const {
    activeColor,
    borderColor,
    iconColor,
    onChange,
    isDisabled,
    isInvalid,
    value: pValue,
    ariaLabel,
    icon,
    size,
    ...newProps
  } = usePropsConfig('Radio', {
    ...context,
    ...props,
  });
  const radioState = cValue ? cValue === pValue : false;
  const pressHandler = () => {
    onChangeHandler && onChangeHandler(pValue);
    onChange && onChange(pValue);
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
      accessible={true}
      accessibilityLabel={ariaLabel}
      accessibilityRole="checkbox"
      ref={ref}
    >
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        {...newProps}
      >
        <Box
          backgroundColor={
            radioState
              ? isDisabled
                ? borderColor
                : activeColor
              : 'transparent'
          }
          borderColor={
            radioState
              ? isDisabled || isInvalid
                ? borderColor
                : activeColor
              : borderColor
          }
          borderWidth={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={999}
        >
          {icon && radioState ? (
            sizedIcon()
          ) : (
            <Icon
              name="circle-medium"
              type="MaterialCommunityIcons"
              size={size}
              color={iconColor}
              opacity={radioState ? 1 : 0}
            />
          )}
        </Box>
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, IRadioProps>(Radio);
