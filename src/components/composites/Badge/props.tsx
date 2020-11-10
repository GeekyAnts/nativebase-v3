import type { IBoxProps } from '@native-base/v3';

export type IBadgeProps = IBoxProps & {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
};
