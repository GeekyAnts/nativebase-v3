import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box } from 'native-base';
import { getAttachedChildren } from '../../../utils';
import type { IRadioGroupProps } from './props';

const CustomRadioGroup = ({
  size,
  spacing,
  children,
  onChange,
  colorScheme,
  value,
  defaultValue,
  ...props
}: IRadioGroupProps) => {
  const [selected, setSelected] = React.useState(value || defaultValue || []);
  const onChangeHandler = (event: any, radioValue: string | number) => {
    setSelected(radioValue);
    onChange && onChange(radioValue, event);
  };

  const childPropsGenerator = (
    {
      size,
      colorScheme,
      spacing,
      ...suppliedProps
    }: {
      size: string | number;
      colorScheme: string;
      spacing: string | number;
    },
    child: JSX.Element
  ) => {
    return {
      ...suppliedProps,
      m: spacing,
      colorScheme: child.props.colorScheme || colorScheme,
      size: child.props.size || size,
      onChange: (event: any, radioValue: string | number) =>
        onChangeHandler(event, radioValue),
      isChecked: selected === child.props.value,
      defaultIsChecked: selected === child.props.value,
    };
  };

  const supplyPropsToChildren = (children: any, suppliedProps: any) => {
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name !== 'Radio') {
        console.error('Only NativeBase Radio is allowed as child');
        return undefined;
      } else {
        const childProps = childPropsGenerator({ ...suppliedProps }, child);
        return React.cloneElement(child, childProps, child.props.children);
      }
    });
  };

  return (
    <Box {...props}>
      {supplyPropsToChildren(getAttachedChildren(children), {
        colorScheme,
        size,
        spacing,
      })}
    </Box>
  );
};

const StyledRadioGroup = styled(CustomRadioGroup)<IRadioGroupProps>(space);

const RadioGroup = ({ children, ...props }: IRadioGroupProps) => {
  return <StyledRadioGroup {...props}>{children}</StyledRadioGroup>;
};

export default RadioGroup;
