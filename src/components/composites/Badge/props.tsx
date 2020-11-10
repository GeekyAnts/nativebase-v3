import type { IBoxProps } from '../../..';

export type IBadgeProps = IBoxProps & {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
};
