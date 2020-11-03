import type { ViewStyle, TextStyle } from 'react-native';
import type { IBoxProps } from 'native-base';
export type IKbdProps = IBoxProps & {
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: JSX.Element | string;
  fontSize?: number;
  shadow?: number;
};
