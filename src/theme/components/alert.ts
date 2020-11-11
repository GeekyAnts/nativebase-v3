// Alert
const baseStyle = (props: Record<string, any>) => {
  console.log('props of baseStyle =====', props);
  // return {
  //   variantStyle: variants(props),
  // };
};

const subtleStyle = (props: Record<string, any>) => {
  console.log('props of subtlestyle =====', props);

  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    border: 6,
    borderColor: 'transparent',
    bg: theme.colors[status][0],
    iconColor: theme.colors[status][1],
    textColor: 'black',
  };
};
const solidStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    border: 6,
    borderColor: 'transparent',
    bg: theme.colors[status][1],
    iconColor: 'white',
    textColor: 'white',
  };
};
const leftAccentStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    bg: theme.colors[status][0],
    border: 6,
    borderColor: 'transparent',
    borderLeftColor: theme.colors[status][1],
    iconColor: theme.colors[status][1],
    textColor: 'black',
  };
};
const topAccentStyle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = status === 'info' ? 'default' : status;
  return {
    bg: theme.colors[status][0],
    border: 6,
    borderColor: 'transparent',
    borderTopColor: theme.colors[status][1],
    iconColor: theme.colors[status][1],
    textColor: 'black',
  };
};

const variants = {
  'subtle': subtleStyle,
  'solid': solidStyle,
  'left-accent': leftAccentStyle,
  'top-accent': topAccentStyle,
};

const defaultAlertProps = {
  status: 'default',
  variant: 'subtle',
};

export const Alert = {
  baseStyle,
  defaultProps: defaultAlertProps,
  variants,
};

// AlertTitle
const defaultAlertTitleProps = {
  // color: 'white',
  fontSize: 'lg',
  fontWeight: 'bold',
};

export const AlertTitle = {
  defaultProps: defaultAlertTitleProps,
};

// AlertDescription
const defaultAlertDescriptionProps = {
  fontSize: 'lg',
  // color: 'white',
};

export const AlertDescription = {
  defaultProps: defaultAlertDescriptionProps,
};
