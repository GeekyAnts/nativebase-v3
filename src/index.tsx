export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Variants,
} from './components/composites';

import {
  View,
  Text,
  TextProps,
  Columns,
  Column,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Icon,
  IconProps,
  Input,
  Image,
  Spinner,
  ISpinnerProps,
} from './components/primitives';

import Theme from './theme';

export {
  AppBar,
  Badge,
  Button,
  IconButton,
  Variants,
  View,
  Text,
  TextProps,
  Columns,
  Column,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Icon,
  IconProps,
  Input,
  Spinner,
  ISpinnerProps,
  Image,
  Theme,
};
