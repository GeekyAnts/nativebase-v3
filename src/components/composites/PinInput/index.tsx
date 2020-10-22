import React from 'react';
import styled from 'styled-components/native';
import { Stack } from 'native-base';
import type { IPinInputProps, IPinInputFieldProps } from './props';
import { space } from 'styled-system';
export { default as PinInputField } from './PinInputField';
export type { IPinInputProps, IPinInputFieldProps };

export const PinInputContext = React.createContext({});
const NBPinInput = ({
  children,
  defaultValue,
  manageFocus = true,
  value,
  ...props
}: IPinInputProps) => {
  const RefList: any[] = [];
  const setRefList = (ref: any, index: number) => {
    RefList[index] = ref;
  };
  const [pinInputValue, setPinInputValue] = React.useState(
    value || defaultValue
  );
  const handleChange = (newValue: string, fieldIndex: number) => {
    let temp = (pinInputValue && [...pinInputValue]) || [];
    temp[fieldIndex] = newValue;
    setPinInputValue(temp.join(''));

    if (manageFocus && fieldIndex + 1 < RefList.length)
      RefList[fieldIndex + 1].current.focus();
    return temp.join('');
  };

  console.log('refList - ', RefList);

  const indexSetter = (children: JSX.Element | JSX.Element[]) => {
    let pinInputFiledCounter = -1;
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'PinInputFiled') return child;
      else {
        pinInputFiledCounter++;
        return React.cloneElement(
          child,
          {
            fieldIndex: pinInputFiledCounter,
          },
          child.props.children
        );
      }
    });
  };
  return (
    <PinInputContext.Provider
      value={{ setRefList, handleChange, ...props, value: pinInputValue }}
    >
      {children && <Stack flexDirection="row">{indexSetter(children)}</Stack>}
    </PinInputContext.Provider>
  );
};

const StyledPinInput = styled(NBPinInput)<IPinInputProps>(space);
StyledPinInput.defaultProps = {
  placeholder: '○',
  inputSize: 'sm',
};

const PinInput = ({ children, ...props }: IPinInputProps) => {
  return <StyledPinInput {...props}>{children}</StyledPinInput>;
};

export default PinInput;
