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
    shadowColor: mode('blackAlpha.7', 'whiteAlpha.7')(props),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    px: 2,
  };
}

export default {
  baseStyle,
};
