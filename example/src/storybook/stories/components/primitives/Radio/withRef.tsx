import React from 'react';
import { RadioGroup, Radio, Icon } from '@native-base/v3';

export default function () {
  const myRef: any = React.useRef({});
  const [state, setState] = React.useState<any>(null);

  return (
    <RadioGroup
      name="exampleGroup"
      colorScheme="success"
      onChange={(value) => {
        setState(value);
        if (value === '2')
          myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
      value={state}
    >
      <Radio
        colorScheme="success"
        icon={
          <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
        }
        value="1"
      >
        Wrong
      </Radio>
      <Radio
        colorScheme="success"
        icon={
          <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
        }
        ref={myRef}
        value="2"
      >
        Correct
      </Radio>
    </RadioGroup>
  );
}
