import React from 'react';
import type { ViewStyle } from 'react-native';

export type IMenuProps = {
  trigger: (_props: any, state: any) => Element;
  children: JSX.Element | Array<JSX.Element>;
  onOpen?: () => void;
  onClose?: () => void;
  offsetSpace?: number;
  closeOnSelect?: boolean;
  testID?: string;
  style?: ViewStyle;
};

export const MenuContext = React.createContext<IMenuContextProps>({
  open: false,
  closeMenu: () => {},
});
export type IMenuContextProps = {
  closeMenu: () => void;
  open: boolean;
  closeOnSelect?: boolean;
};
