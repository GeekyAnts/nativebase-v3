import React from 'react';
import { Avatar, HStack, AvatarBadge } from 'native-base';

export default function () {
  return (
    <HStack>
      <Avatar
        src={'https://nativebase.io/assets/img/front-page-icon.png'}
        name={'Native Base'}
      >
        <AvatarBadge bg={'red'} boxSize={3} />
      </Avatar>
      <Avatar
        src={'https://nativebase.io/assets/img/front-page-icon.png'}
        name={'Native Base'}
      >
        <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize={3} />
      </Avatar>
    </HStack>
  );
}
