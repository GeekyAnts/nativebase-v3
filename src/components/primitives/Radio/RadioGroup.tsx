import React from 'react';
import styled from 'styled-components/native';
import { SpaceProps, TypographyProps, space } from 'styled-system';
import { Box } from 'native-base';
import { getAttachedChildren } from '../../../utils';

export type IRadioGroupProps = SpaceProps &
  SpaceProps &
  TypographyProps & {
    id?: string;
    value?: string | number;
    defaultValue?: string | number;
    colorScheme?: string;
    size?: 'sm' | 'md' | 'lg';
    spacing?: string | number;
    children: JSX.Element[];
    onChange?: (value: string | number, event?: any) => void;
    // Custom props
    style?: any | undefined;
  };

const RadioGroup = ({
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
  const onChangeHandler = (
    event: any,
    isChecked: boolean,
    radioValue: string | number
  ) => {
    console.log(isChecked);
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
      onChange: (event: any, isChecked: boolean, radioValue: string | number) =>
        onChangeHandler(event, isChecked, radioValue),
      isChecked: selected === child.props.value,
      defaultIsChecked: selected === child.props.value,
    };
  };

  const supplyPropsToChildren = (children: any, suppliedProps: any) => {
    return children.map((child: JSX.Element) => {
      if (child.type.name !== 'NBRadio') {
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

const StyledRadioGroup = styled(RadioGroup)<IRadioGroupProps>(space);

const NBRadioGroup = ({ children, ...props }: IRadioGroupProps) => {
  return <StyledRadioGroup {...props}>{children}</StyledRadioGroup>;
};

export default NBRadioGroup;
