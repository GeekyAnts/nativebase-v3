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
  AlertHeading,
  Alert,
  AspectRatioBox,
  Avatar,
  AvatarBadge,
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
  NBImage,
  NBImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
} from './components/primitives';

import Theme from './theme';

export {
  AppBar,
  Alert,
  AlertHeading,
  AspectRatioBox,
  Avatar,
  AvatarBadge,
  IHeadingProps,
  Badge,
  Button,
  IconButton,
  Heading,
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
  NBImage,
  NBImageProps,
  Theme,
};
