import type { IBoxProps, IButtonProps } from '../../primitives';

export type IActionsheetProps = IBoxProps & {
  isOpen?: boolean;
  onClose?: any;
  disableOverlay?: boolean;
};
export type IActionsheetContentProps = IBoxProps & {};
export type IActionsheetFooterProps = IBoxProps & {};
export type IActionsheetHeaderProps = IBoxProps & {};
export type IActionsheetItemProps = IButtonProps & {};
