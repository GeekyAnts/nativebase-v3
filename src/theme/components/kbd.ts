import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode('gray.2', 'whiteAlpha.2')(props),
    borderColor: mode('gray.3', 'whiteAlpha.3')(props),
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 'md',
    fontSize: 'sm',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    px: 2,
  };
}

const defaultProps = {
  shadow: 1,
};
export default {
  baseStyle,
  defaultProps,
};
