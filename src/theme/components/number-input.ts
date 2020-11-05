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
  defaultProps,
};

//Steppers

const stepperDefaultProps = {
  _active: {},
  _disabled: {
    bg: 'gray.3',
  },
};

export const NumberInputStepper = {
  defaultProps: stepperDefaultProps,
};