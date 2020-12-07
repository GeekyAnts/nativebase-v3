import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { RadioContext } from './RadioGroup';
import type { IRadioProps } from './props';
import { useRadio } from './useRadio';

const Radio = (props: IRadioProps, ref: any) => {
  const { children } = props;

  const contextState = React.useContext(RadioContext);

  const {
    activeColor,
    borderColor,
    iconColor,
    icon,
    size,
    ...newProps
  } = usePropsConfig('Radio', {
    ...contextState,
    ...props,
  });

  const sizedIcon = () =>
    React.cloneElement(icon, {
      size,
      color: icon.props.color ? icon.props.color : iconColor,
    });

  const { inputProps } = useRadio(props, contextState, null);
  const { checked } = inputProps;

  return (
    <TouchableOpacity activeOpacity={1} ref={ref} {...inputProps}>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        {...newProps}
      >
        <Box
          backgroundColor={checked ? activeColor : 'transparent'}
          borderColor={checked ? activeColor : borderColor}
          borderWidth={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={999}
        >
          {icon && checked ? (
            sizedIcon()
          ) : (
            <Icon
              name="circle-medium"
              type="MaterialCommunityIcons"
              size={size}
              color={iconColor}
              opacity={checked ? 1 : 0}
            />
          )}
        </Box>
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, IRadioProps>(Radio);
