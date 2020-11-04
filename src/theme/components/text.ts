const baseStyle = () => {
  return { fontSize: getFontSize };
};

const getFontSize = (props: Record<string, any>) => {
  const { fontSize, theme } = props;
  if (theme.fontSizes.includes(fontSize)) {
    return { fontSize: theme.fontSizes[fontSize] };
  }
  return { fontSize };
};
const defaultProps = { fontSize: 'md' };

export default {
  baseStyle,
  defaultProps,
};
