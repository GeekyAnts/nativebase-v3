import React from 'react';
import { MenuContext, IMenuContextProps } from './props';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

const Touchable: any =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableHighlight;

const MenuItem = ({
  children,
  disabled,
  onPress,
  style,
  textStyle,
  ...props
}: any) => {
  const { closeMenu, closeOnSelect }: IMenuContextProps = React.useContext(
    MenuContext
  );
  return (
    <Touchable
      {...props}
      style={[styles.container, style]}
      onPress={(e: any) => {
        onPress && onPress(e);
        if (closeOnSelect) {
          closeMenu();
        }
      }}
    >
      <Text style={[styles.title, textStyle]}>{children}</Text>
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
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    textAlign: 'left',
  },
});

export default MenuItem;
