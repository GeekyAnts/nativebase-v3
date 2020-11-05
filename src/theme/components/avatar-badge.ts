import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    borderRadius: 'full',
    borderWidth: 2,
    borderColor: mode('light.0', 'gray.8')(props),
    bg: mode('gray.6', 'light.1')(props),
  };
}

export default { baseStyle };
