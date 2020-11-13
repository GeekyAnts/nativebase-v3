import { NativeModules } from 'react-native';

export function useClipboard() {
  const Clipboard = NativeModules.RNCClipboard;
  const getString = (): Promise<string> => {
    return Clipboard.getString();
  };
  const setString = (): Promise<string> => {
    return Clipboard.setString();
  };
  const hasString = (): Promise<string> => {
    return Clipboard.hasString();
  };
  const hasURL = (): Promise<string> => {
    return Clipboard.hasURL();
  };
  return {
    getString,
    setString,
    hasString,
    hasURL,
  };
}
