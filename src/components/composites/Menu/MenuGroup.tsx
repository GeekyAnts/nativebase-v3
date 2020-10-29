import React from 'react';
import { Text } from 'native-base';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
export type IMenuGroupProps = {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
};

export const MenuGroup = ({ title, children }: IMenuGroupProps) => {
  const Touchable: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableHighlight;
  return (
    <>
      <Touchable activeOpacity={1} underlayColor={'transparent'}>
        <Text style={styles.title}>{title}</Text>
      </Touchable>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '600',
    padding: 10,
    textAlign: 'left',
  },
});
