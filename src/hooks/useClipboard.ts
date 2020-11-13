// import React from 'react';
import { NativeModules } from 'react-native';

export function useClipboard() {
  // const [hasCopied, setHasCopied] = React.useState(false);
  const Clipboard = NativeModules.RNCClipboard;
  const getString = async () => {
    return await Clipboard.getString();
  };
  const setString = async (string: string) => {
    return await Clipboard.setString(string);
  };
  const hasString = async () => {
    return await Clipboard.hasString();
  };
  const hasURL = async () => {
    return await Clipboard.hasURL();
  };
  return {
    getString,
    setString,
    hasString,
    hasURL,
  };
}
