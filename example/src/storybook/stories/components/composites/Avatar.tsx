import React from 'react';
import { Avatar, AvatarBadge } from 'native-base';

export default function () {
  return (
    <Avatar
      avatarSize={100}
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      //Uncomment next line to get initials when the source is wrong or broken
      //name="Native Base"
    >
      <AvatarBadge boxSize={13} badgeColor="seagreen" />
    </Avatar>
  );
}
