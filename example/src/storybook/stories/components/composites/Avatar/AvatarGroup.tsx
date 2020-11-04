import React from 'react';
import { Avatar, AvatarGroup, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <AvatarGroup size="lg" max={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      </AvatarGroup>
    </View>
  );
}
