import type { IBoxProps } from 'native-base';

export type IBadgeProps = IBoxProps & {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
};
