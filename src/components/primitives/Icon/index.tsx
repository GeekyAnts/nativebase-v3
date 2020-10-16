import React, { useContext } from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {
  ColorProps,
  SpaceProps,
  color,
  space,
  TypographyProps,
} from 'styled-system';
import { ThemeContext } from '../../../theme';
import type { IconType } from './iconIndex';

export type IBoxProps = ViewProps &
  ColorProps &
  SpaceProps & {
    style?: ViewStyle;
    size?: number;
    name: string;
    type: string;
  };
export type IconProps = TypographyProps &
  // ColorProps &
  SpaceProps & {
    name: string;
    type?: IconType;
    style?: TextStyle | {};
  };

const StyledBox = styled(View)<IBoxProps>(color, space);
const Icon = ({ style, ...props }: IBoxProps) => {
  console.log(props.color, 'fdsfdsf');
  const theme: Theme = useContext(ThemeContext);
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    props.size
      ? { width: props.size, height: props.size }
      : { width: 16, height: 16 },
    props.color
      ? { backgroundColor: 'white' }
      : { backgroundColor: theme.colors.gray[5] },
  ]);
  return <StyledBox {...props} style={computedStyle} />;
};

export default Icon;
