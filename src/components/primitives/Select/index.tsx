import React, { useState } from 'react';
import { Picker } from 'react-native';

import styled from 'styled-components/native';
import { space, color, layout, typography, variant } from 'styled-system';

export type ISelectProps = {
  initValue?: string | undefined;
  style?: any | undefined;
  width?: string | undefined;
};
const StyledSelect = styled(Picker)<ISelectProps>(
  space,
  color,
  layout,
  typography,
  variant({
    prop: 'width',
    variants: {
      full: { width: '100%' },
      large: { width: '250px' },
      small: { width: '150px' },
    },
  })
);
StyledSelect.defaultProps = {
  width: 'small',
};

const Select = ({
  initValue,
  options,
  ...props
}: ISelectProps & { options: Array<{ label: string; value: string }> }) => {
  const [selectedValue, setSelectedValue] = useState(initValue);
  const selectOptions = () =>
    options.map((option) => (
      <Picker.Item label={option.label} value={option.value} />
    ));
  return (
    <StyledSelect
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      {...props}
    >
      {selectOptions()}
    </StyledSelect>
  );
};

export default Select;
