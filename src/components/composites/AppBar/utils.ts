import { Platform, StatusBar } from 'react-native';
// @ts-ignore
const expo = global.__expo;

const IOS_STATUS_BAR_HEIGHT = 20;

const DEFAULT_STATUSBAR_HEIGHT_EXPO = expo?.Constants
  ? expo.Constants.statusBarHeight
  : 0;

// IOS >= 11 is handled using SafeAreaView
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: DEFAULT_STATUSBAR_HEIGHT_EXPO
    ? DEFAULT_STATUSBAR_HEIGHT_EXPO
    : StatusBar.currentHeight,
  ios:
    Platform.Version < 11
      ? DEFAULT_STATUSBAR_HEIGHT_EXPO
        ? DEFAULT_STATUSBAR_HEIGHT_EXPO
        : IOS_STATUS_BAR_HEIGHT
      : 0,
});
