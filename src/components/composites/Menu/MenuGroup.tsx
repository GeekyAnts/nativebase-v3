import React from 'react';
import { Text } from 'native-base';
import {
  Platform,
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
        <Text fontSize={14} fontWeight={'semibold'} p={2}>
          {title}
        </Text>
      </Touchable>
      {children}
    </>
  );
};
