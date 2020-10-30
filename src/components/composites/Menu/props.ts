import type {
  ViewStyle,
  TextStyle,
  TouchableNativeFeedbackProps,
  TouchableHighlightProps,
} from 'react-native';

export type IMenuProps = {
  trigger: (_props: any, state: { open: boolean }) => Element;
  children: JSX.Element | Array<JSX.Element>;
  onOpen?: () => void;
  onClose?: () => void;
  offsetSpace?: number;
  closeOnSelect?: boolean;
  testID?: string;
  style?: ViewStyle;
};

export type IMenuItemProps = TouchableNativeFeedbackProps &
  TouchableHighlightProps & {
    children: string | JSX.Element;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
  };

export type IMenuItemOptionProps = IMenuItemProps & {
  value: string | number;
};
export type IMenuGroupProps = {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
};

export type IMenuContextProps = {
  closeMenu: () => void;
  open: boolean;
  closeOnSelect?: boolean;
};

export type IMenuOptionGroupProps = IMenuGroupProps & {
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | Array<string> | Array<number>;
  value?: string | number | Array<string> | Array<number>;
  onChange?: (val: any) => void;
};

export type IMenuOptionContextProps = {
  values: Array<string | number>;
  onChange: (val: string | number) => void;
  type: 'radio' | 'checkbox';
};
