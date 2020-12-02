// Alert
const subtleStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    border: 6,
    borderColor: 'transparent',
    bg: theme.colors[status][50],
    iconColor: theme.colors[status][100],
    textColor: 'black',
  };
};
const solidStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    border: 6,
    borderColor: 'transparent',
    bg: theme.colors[status][100],
    iconColor: 'white',
    textColor: 'white',
  };
};
const leftAccentStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    bg: theme.colors[status][50],
    border: 6,
    borderColor: 'transparent',
    borderLeftColor: theme.colors[status][100],
    iconColor: theme.colors[status][100],
    textColor: 'black',
  };
};
const topAccentStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    bg: theme.colors[status][50],
    border: 6,
    borderColor: 'transparent',
    borderTopColor: theme.colors[status][100],
    iconColor: theme.colors[status][100],
    textColor: 'black',
  };
};

const variants = {
  subtle: subtleStyle,
  solid: solidStyle,
  'left-accent': leftAccentStyle,
  'top-accent': topAccentStyle,
};

const defaultAlertProps = {
  status: 'default',
  variant: 'subtle',
  p: 3,
  borderRadius: 'md',
};

export const Alert = {
  defaultProps: defaultAlertProps,
  variants,
};

// AlertTitle
const defaultAlertTitleProps = {
  fontSize: 'lg',
  fontWeight: 'bold',
};

export const AlertTitle = {
  defaultProps: defaultAlertTitleProps,
};

// AlertDescription
const defaultAlertDescriptionProps = {
  fontSize: 'lg',
};

export const AlertDescription = {
  defaultProps: defaultAlertDescriptionProps,
};
