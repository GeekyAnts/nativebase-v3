import React from 'react';
import { Text } from '../index';

export const addTextAndPropsToStrings = (children: any, props: any) => {
  const childArray = React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return <Text {...props}>{child}</Text>;
    } else {
      const newProps = {
        ...props,
        ...child.props,
      };
      return React.cloneElement(child, newProps);
    }
  });

  return childArray;
};
