import React from 'react';
import { Stack, usePropsConfig } from '../../..';
import type {
  IPinInputProps,
  IPinInputFieldProps,
  IPinInputContext,
} from './props';
import { FormControlContext, IFormControlContext } from '../FormControl';

export const PinInputContext = React.createContext({});

const PinInput = ({ children, ...props }: IPinInputProps) => {
  const { manageFocus, defaultValue, value, ...newProps } = usePropsConfig(
    'PinInput',
    props
  );
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const RefList: Array<any> = [];
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

    if (newValue && manageFocus && fieldIndex + 1 < RefList.length)
      RefList[fieldIndex + 1].current.focus();
    if (!newValue && manageFocus && fieldIndex - 1 > -1)
      RefList[fieldIndex - 1].current.focus();
    return temp.join('');
  };
  const handleMultiValueChange = (newValue: string) => {
    const pinFieldLength = RefList.length;
    const newValueLength = newValue.length;
    if (newValueLength >= pinFieldLength) {
      let splicedValue = newValue ? [...newValue] : [];
      splicedValue.splice(pinFieldLength);
      RefList[pinFieldLength - 1].current.focus();
      setPinInputValue(splicedValue.join(''));
    }
  };

  const indexSetter = (allChildren: JSX.Element | JSX.Element[]) => {
    let pinInputFiledCounter = -1;
    return React.Children.map(allChildren, (child: JSX.Element) => {
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
      value={{
        ...formControlContext,
        ...newProps,
        setRefList,
        handleChange,
        handleMultiValueChange,
        value: pinInputValue,
      }}
    >
      {children && <Stack flexDirection="row">{indexSetter(children)}</Stack>}
    </PinInputContext.Provider>
  );
};

export default PinInput;
export { default as PinInputField } from './PinInputField';
export type { IPinInputProps, IPinInputFieldProps, IPinInputContext };
