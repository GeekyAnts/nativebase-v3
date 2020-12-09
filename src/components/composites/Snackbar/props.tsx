import type { ISlideProps } from '../Transitions';

export type ISnackbarProps = ISlideProps & {
  accessibilityAnnouncement?: string;
};
export type IsetSnackbar = (
  component: React.ReactNode,
  config?: ISnackbarProps & {
    enableOverlay?: boolean;
    duration?: number;
    accessibilityAnnouncement?: string;
  }
) => void;
export type IuseSnackbarProps = () => {
  setSnackbar: IsetSnackbar;
};
