import type { ColorProps, SpaceProps, PositionProps } from 'styled-system';

export type ISliderProps = ColorProps &
  SpaceProps &
  PositionProps & {
    value?: number;
    defaultValue?: number;
    min?: number;
    main?: number;
    step?: number;
    onChange?: (value?: number) => void;
    onChnageEnd?: (value?: number) => void;
    isReadOnly?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onMouse?: () => void;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaValueText?: string;
    orientation?: string;
    getAriaValueText?: (value?: number) => string;
    size?: 'sm' | 'md' | 'lg';
    colorScheme?: string;
    name?: string;
    id?: string;
    children?: React.ReactNode;
    isReversed?: boolean;
  };
