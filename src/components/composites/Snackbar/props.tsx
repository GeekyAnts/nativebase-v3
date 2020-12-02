import type { ISlideProps } from '../Transitions';

export type ISnackbarProps = ISlideProps & {};
export type IsetSnackbar = (
  component: React.ReactNode,
  config?: ISnackbarProps & {
    enableOverlay?: boolean;
    duration?: number;
  }
) => void;
export type IuseSnackbarProps = () => {
  setSnackbar: IsetSnackbar;
};
