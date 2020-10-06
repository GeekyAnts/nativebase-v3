import React, { useState } from 'react';
import { Picker } from 'react-native';

import styled from 'styled-components/native';
import { space, color } from 'styled-system';

export type ISelectProps = {
  initValue?: string | undefined;
  style?: any | undefined;
  options: Array<{ label: string; value: string }>;
};
const StyledSelect = styled(Picker)(space, color);

const Select = ({ initValue, options, ...props }: ISelectProps) => {
  const [selectedValue, setSelectedValue] = useState(initValue);
  const selectOptions = () =>
    options.map((option) => (
      <Picker.Item label={option.label} value={option.value} />
    ));
  return (
    <StyledSelect
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      {...props}
    >
      {selectOptions()}
    </StyledSelect>
  );
};

export default Select;
