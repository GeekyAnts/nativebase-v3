import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box } from 'native-base';
import { getAttachedChildren } from '../../../utils';
import type { ICheckboxGroupProps } from './props';

const CheckboxGroup = ({
  size,
  spacing,
  children,
  onChange,
  colorScheme,
  value,
  defaultValue,
  ...props
}: ICheckboxGroupProps) => {
  const [values, setValues] = React.useState(value || defaultValue || []);
  const onChangeHandler = (
    event: any,
    isChecked: boolean,
    checkboxValue: string | number
  ) => {
    const valuesSet = new Set(values);
    if (isChecked) valuesSet.add(checkboxValue);
    else valuesSet.delete(checkboxValue);
    setValues([...valuesSet]);
    onChange && onChange([...valuesSet], event);
  };

  const childPropsGenerator = (
    {
      defaultValue,
      spacing,
      colorScheme,
      size,
      ...suppliedProps
    }: {
      size: string | number;
      colorScheme: string;
      spacing: string | number;
      value: Array<any>;
      onChange?: (values: Array<any>) => void;
      defaultValue: Array<any>;
    },
    child: JSX.Element
  ) => {
    return {
      ...suppliedProps,
      m: spacing,
      colorScheme: child.props.colorScheme || colorScheme,
      size: child.props.size || size,
      onChange: (
        event: any,
        checkboxValue: string | number,
        isChecked: boolean
      ) => onChangeHandler(event, isChecked, checkboxValue),
      isChecked: values?.includes(child.props.value),
      defaultIsChecked: defaultValue?.includes(child.props.value),
    };
  };

  const supplyPropsToChildren = (children: any, suppliedProps: any) => {
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'NBCheckbox') {
        console.error('Only NativeBase Checkbox is allowed as child');
        return undefined;
      } else if (child.props.isIndeterminate) {
        return React.cloneElement(
          child,
          {
            m: suppliedProps.spacing,
            colorScheme: suppliedProps.colorScheme,
            size: suppliedProps.size,
          },
          child.props.children
        );
      } else {
        const childProps = childPropsGenerator(suppliedProps, child);
        return React.cloneElement(child, childProps, child.props.children);
      }
    });
  };

  return (
    <Box {...props}>
      {supplyPropsToChildren(getAttachedChildren(children), {
        defaultValue,
        colorScheme,
        size,
        spacing,
      })}
    </Box>
  );
};

const StyledCheckboxGroup = styled(CheckboxGroup)<ICheckboxGroupProps>(space);

const NBCheckboxGroup = ({ children, ...props }: ICheckboxGroupProps) => {
  return <StyledCheckboxGroup {...props}>{children}</StyledCheckboxGroup>;
};

export default NBCheckboxGroup;
