import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Input } from 'native-base';
import type { IPinInputFieldProps } from './props';
import { PinInputContext, IPinInputProps } from './index';

const NBPinInputFiled = ({
  value: pValue,
  fieldIndex = 0,
  defaultValue: pDefaultValue,
  ...props
}: IPinInputFieldProps) => {
  let {
    handleChange,
    value: cValue,
    setRefList,
    defaultValue: cDefaultValue,
    ...context
  }: IPinInputProps & {
    handleChange?: (value: string, index: number) => void;
    value?: string[] | string;
    size?: string;
    defaultValue?: string[] | string;
    setRefList?: (ref: any, index: number) => void;
  } = React.useContext(PinInputContext);
  cDefaultValue = cDefaultValue && cDefaultValue[fieldIndex];
  cValue = cValue && cValue[fieldIndex];

  const [pinInputField, setPinInputField] = React.useState(pValue || cValue);
  const changeHandler = (event: any) => {
    if (event.nativeEvent.key >= 0 && event.nativeEvent.key <= 9) {
      setPinInputField(event.nativeEvent.key);
      handleChange && handleChange(event.nativeEvent.key, fieldIndex);
    } else if (event.nativeEvent.key === 'Backspace') {
      setPinInputField('');
      handleChange && handleChange('', fieldIndex);
    }
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
      maxLength={1}
      onKeyPress={(event) => changeHandler(event)}
      keyboardType="numeric"
      defaultValue={pDefaultValue || cDefaultValue}
      value={pinInputField}
      style={[context.style, props.style]}
    />
  );
};

const StyledPinInputFiled = styled(NBPinInputFiled)<IPinInputFieldProps>(space);
const PinInputFiled = ({ children, ...props }: IPinInputFieldProps) => {
  return <StyledPinInputFiled {...props}>{children}</StyledPinInputFiled>;
};

export default PinInputFiled;
