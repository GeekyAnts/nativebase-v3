import React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText } from 'native-base';

export default function () {
  return (
    <Stat>
      <StatLabel>This is Stat</StatLabel>
      <StatNumber>28%</StatNumber>
      <StatHelpText>Help Text</StatHelpText>
    </Stat>
  );
}
