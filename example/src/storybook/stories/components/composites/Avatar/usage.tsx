import React from 'react';
import { Avatar, HStack, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <HStack>
        <Avatar
          mr={2}
          name="Sanket Sahu"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
          }}
        />
        <Avatar
          mr={2}
          name="Gaurav Guha"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
        <Avatar
          mr={2}
          name="Rohit Singh"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
          }}
        />
        <Avatar
          mr={2}
          name="Ankur Kedia"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}
        />
        <Avatar
          mr={2}
          name="Suraj Ahmed"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/983582580372004864/h9ccP0Ea_400x400.jpg',
          }}
        />
        <Avatar
          mr={2}
          name="Rehman Baig"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
          }}
        />
      </HStack>
    </View>
  );
}
