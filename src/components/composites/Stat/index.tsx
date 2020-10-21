import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';
import { Box, IBoxProps, Text, TextProps, Icon } from '../../..';
export type IStatProps = TextProps &
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
    style?: TextStyle;
  };

export const StatLabel = ({ style, ...props }: TextProps) => {
  return (
    <Text style={style} {...props}>
      {props.children}
    </Text>
  );
};
export const StatNumber = ({
  style,
  fontSize,
  fontWeight,
  ...props
}: TextProps) => {
  return (
    <Text
      my={2}
      style={style}
      fontSize={fontSize ? fontSize : '3xl'}
      fontWeight={fontWeight ? fontWeight : 700}
      {...props}
    >
      {props.children}
    </Text>
  );
};
export const StatHelpText = ({ style, ...props }: IBoxProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      opacity: 0.7,
    },
  ]);
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      style={computedStyle}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export const StatArrow = ({
  type,
  ...props
}: {
  type?: 'increase' | 'decrease';
}) => {
  return (
    <Icon
      type="MaterialIcons"
      name={type === 'increase' ? 'arrow-drop-up' : 'arrow-drop-down'}
      color={type === 'increase' ? 'green.5' : 'red.5'}
      {...props}
    />
  );
};

export const StatGroup = ({ style, ...props }: IBoxProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  ]);
  return <Box flexWrap="wrap" style={computedStyle} {...props} />;
};

const Stat = ({ style, ...props }: IBoxProps) => {
  return <Box {...props} style={style} />;
};
export default Stat;
