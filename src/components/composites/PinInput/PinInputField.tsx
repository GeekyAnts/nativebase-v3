import React from 'react';
import { Input } from '../../..';
import type { IPinInputFieldProps, IPinInputContext } from './props';
import { PinInputContext } from './index';

const PinInputFiled = ({
  fieldIndex = 0,
  defaultValue: pDefaultValue,
  ...props
}: IPinInputFieldProps) => {
  let {
    handleChange,
    value: cValue,
    setRefList,
    defaultValue: cDefaultValue,
    handleMultiValueChange,
    ...context
  }: IPinInputContext = React.useContext(PinInputContext);
  cDefaultValue = cDefaultValue && cDefaultValue[fieldIndex];
  cValue = cValue && cValue[fieldIndex];

  const keyPressHandler = (event: any) => {
    if (event.nativeEvent.key >= 0 && event.nativeEvent.key <= 9) {
      handleChange && handleChange(event.nativeEvent.key, fieldIndex);
    } else if (event.nativeEvent.key === 'Backspace') {
      handleChange && handleChange('', fieldIndex);
    }
  };
  const multiValueHandler = (value: any) => {
    if (value.length > 2)
      handleMultiValueChange && handleMultiValueChange(value);
  };
  const myRef = React.useRef(null);
  React.useEffect(() => {
    setRefList && setRefList(myRef, fieldIndex);
  }, [myRef, fieldIndex, setRefList]);

  return (
    <Input
      p={2}
      ref={myRef}
      {...context}
      {...props}
      onKeyPress={(event) => keyPressHandler(event)}
      onChangeText={(value) => multiValueHandler(value)}
      keyboardType="numeric"
      defaultValue={pDefaultValue || cDefaultValue}
      value={cValue}
      style={[context.style, props.style]}
    />
  );
};

export default PinInputFiled;
