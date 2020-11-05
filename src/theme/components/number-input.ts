const baseStyle = {};

const defaultProps = {
  inputSize: 'sm',
  step: 1,
  min: -Infinity,
  max: Infinity,
  defaultValue: '0',
  keepWithinRange: true,
  clampValueOnBlur: true,
  focusInputOnChange: true,
  getAriaValueText: true,
};

export default {
  baseStyle,
  defaultProps,
};

//Steppers
const stepperBaseStyle = {};

const stepperDefaultProps = {
  _active: {},
  _disabled: {
    backgroundColor: 'lightgray',
  },
};

export const NumberInputStepper = {
  baseStyle: stepperBaseStyle,
  defaultProps: stepperDefaultProps,
};
