import React from 'react';
import { createIcon } from 'native-base';
export default function () {
  const CustomIcon = createIcon({
    viewBox: '0 0 200 200',
    d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    // path: [
    //   <path
    //     fill="blue"
    //     d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    //   />,
    //   <path
    //     fill="blue"
    //     d="M 200, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    //   />,
    // ],
  });
  return <CustomIcon color="red" boxSize={50} />;
}
