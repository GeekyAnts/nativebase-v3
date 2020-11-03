import React from 'react';
import { Icon, Path } from 'native-base';
export default function () {
  return (
    <Icon viewBox="0 0 200 200" color="blue.3" size={12}>
      <Path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );
}
