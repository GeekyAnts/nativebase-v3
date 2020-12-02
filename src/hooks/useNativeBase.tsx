import { useColorMode } from './../color-mode';
import { useTheme } from './../theme';

export function useNativeBase() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}
