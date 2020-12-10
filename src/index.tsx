export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  IBadgeProps,
  IconButton,
  IIconButtonProps,
  Variants,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  Alert,
  IAlertProps,
  AspectRatio,
  IAspectRatioProps,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  ICloseButtonProps,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Kbd,
  Progress,
  Accordion,
  IAccordionProps,
  AccordionItem,
  IAccordionItemProps,
  AccordionButton,
  IAccordionButtonProps,
  AccordionPanel,
  IAccordionPanelProps,
  AccordionIcon,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  SkeletonCircle,
  ISkeletonCircleProps,
  SkeletonText,
  ISkeletonTextProps,
  FormControl,
  IFormControlProps,
  FormLabel,
  IFormLabelProps,
  FormErrorMessage,
  IFormErrorMessageProps,
  FormHelperText,
  IFormHelperTextProps,
  IFormControlContext,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  Code,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  PinInputField,
  IPinInputFieldProps,
  Fade,
  useFadeAnimation,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  Collapse,
  CollapseButton,
  CircularProgress,
  CircularProgressLabel,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  ToastProvider,
  IToastProps,
  useToast,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  SimpleGrid,
  ISimpleGridProps,
  Tabs,
  TabBar,
  Tab,
  TabViews,
  TabView,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  Snackbar,
  useSnackbar,
  ISnackbarProps,
  IuseSnackbarProps,
} from './components/composites';

import {
  View,
  Text,
  ITextProps,
  Checkbox,
  ICheckboxProps,
  CheckboxGroup,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  IRadioValue,
  RadioGroup,
  IRadioGroupProps,
  Button,
  ButtonGroup,
  IButtonProps,
  Column,
  Row,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  ISliderProps,
  ISliderContextProps,
  Icon,
  createIcon,
  IIconProps,
  Path,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputProps,
  Image,
  IImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  Switch,
  ISwitchProps,
  IFlexProps,
  TextArea,
  Link,
  ILinkProps,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Ol,
  Ul,
  IListProps,
  IListItemProps,
  Overlay,
  useOverlay,
  IOverlayProps,
  IOverlayContextProps,
  IuseOverlayProps,
} from './components/primitives';

export * from './theme';
export * from './core';
export * from './hooks';
export * from './color-mode';

export {
  AppBar,
  Alert,
  IAlertProps,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  IAspectRatioProps,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  IHeadingProps,
  Badge,
  IBadgeProps,
  IButtonProps,
  Button,
  ButtonGroup,
  IconButton,
  IIconButtonProps,
  Heading,
  Variants,
  View,
  Text,
  Code,
  ITextProps,
  Checkbox,
  ICheckboxProps,
  CheckboxGroup,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  RadioGroup,
  IRadioValue,
  IRadioGroupProps,
  Column,
  Row,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  ISliderProps,
  ISliderContextProps,
  Icon,
  createIcon,
  IIconProps,
  Path,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputProps,
  Spinner,
  ISpinnerProps,
  Image,
  IImageProps,
  Switch,
  Flex,
  Kbd,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  ICloseButtonProps,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Link,
  ILinkProps,
  Progress,
  Accordion,
  IAccordionProps,
  AccordionItem,
  IAccordionItemProps,
  AccordionButton,
  IAccordionButtonProps,
  AccordionPanel,
  IAccordionPanelProps,
  AccordionIcon,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  SkeletonCircle,
  ISkeletonCircleProps,
  SkeletonText,
  ISkeletonTextProps,
  FormControl,
  IFormControlProps,
  FormLabel,
  IFormLabelProps,
  FormErrorMessage,
  IFormErrorMessageProps,
  FormHelperText,
  IFormHelperTextProps,
  IFormControlContext,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  TextArea,
  ISwitchProps,
  IFlexProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  PinInputField,
  IPinInputFieldProps,
  Fade,
  useFadeAnimation,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  Spacer,
  Collapse,
  CollapseButton,
  CircularProgress,
  CircularProgressLabel,
  List,
  ListItem,
  ListItem as Li,
  ListIcon,
  Ol,
  Ul,
  IListProps,
  IListItemProps,
  Overlay,
  useOverlay,
  IOverlayProps,
  IOverlayContextProps,
  IuseOverlayProps,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  IToastProps,
  useToast,
  ToastProvider,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  SimpleGrid,
  ISimpleGridProps,
  Tabs,
  TabBar,
  Tab,
  TabViews,
  TabView,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  Snackbar,
  useSnackbar,
  ISnackbarProps,
  IuseSnackbarProps,
};
