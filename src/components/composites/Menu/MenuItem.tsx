import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableHighlightProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import type { IMenuContextProps } from './props';
import { MenuContext } from './Menu';

export type IMenuItemProps = TouchableNativeFeedbackProps &
  TouchableHighlightProps & {
    children: string | JSX.Element;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
  };

export const MenuItem = ({
  children,
  onPress,
  style,
  textStyle,
  ...props
}: IMenuItemProps) => {
  const Touchable: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableHighlight;
  const { closeMenu, closeOnSelect }: IMenuContextProps = React.useContext(
    MenuContext
  );
  return (
    <Touchable
      {...props}
      style={[styles.container, style]}
      onPress={(e: any) => {
        if (!props.disabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            closeMenu();
          }
        }
      }}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.title, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </Touchable>
  );
};

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#bdbdbd',
  ellipsizeMode: Platform.OS === 'ios' ? 'clip' : 'tail',
  underlayColor: '#e0e0e0',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    padding: 10,
    textAlign: 'left',
  },
});
