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
  value,
  ...props
}: IPinInputProps) => {
  const [pinInputValue, setPinInputValue] = React.useState(
    (value && [...value]) || (defaultValue && [...defaultValue])
  );
  const handleChange = (newValue: string, fieldIndex: number) => {
    let temp = pinInputValue || [];
    if (temp) temp[fieldIndex] = newValue;
    setPinInputValue(temp);
    return temp.join('');
  };

  const indexSetter = (children: JSX.Element | JSX.Element[]) => {
    let PinInputFiledCounter = -1;
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'PinInputFiled') {
        return child;
      } else {
        PinInputFiledCounter++;
        return React.cloneElement(
          child,
          {
            fieldIndex: PinInputFiledCounter,
          },
          child.props.children
        );
      }
    });
  };
  return (
    <PinInputContext.Provider
      value={{ handleChange, ...props, value: pinInputValue }}
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
