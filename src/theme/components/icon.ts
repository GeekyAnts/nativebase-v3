import baseSizes from './../base/sizes';
import typography from './../base/typography';

function getSizes() {
  let spaceValues: any = {};
  for (let key in baseSizes) {
    if (key !== 'container') {
      spaceValues[key] = {
        // @ts-ignore
        size: baseSizes[key],
      };
    }
  }
  let fontValues: any = {};
  for (let key in typography.fontSizes) {
    fontValues[key] = {
      // @ts-ignore
      size: typography.fontSizes[key],
    };
  }
  return { ...fontValues, ...spaceValues };
}

const sizes = getSizes();
const baseStyle = {
  size: 20,
};
export default { sizes, baseStyle };
