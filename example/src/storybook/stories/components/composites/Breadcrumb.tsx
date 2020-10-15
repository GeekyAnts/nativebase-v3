import React from 'react';
import { BreadCrumb, BreadCrumbItem, BreadCrumbLink } from 'native-base';

export default function () {
  return (
    <BreadCrumb separator="|">
      <BreadCrumbItem>
        <BreadCrumbLink isUnderlined={false} href="https://google.com">
          Google
        </BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbLink href="https://google.com">Google</BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbLink href="https://google.com">Google</BreadCrumbLink>
      </BreadCrumbItem>
    </BreadCrumb>
  );
}
