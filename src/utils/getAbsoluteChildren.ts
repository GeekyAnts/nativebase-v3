import React from 'react';

export default (children: JSX.Element[] | JSX.Element, reverse?: boolean) => {
  let childrenArray = React.Children.toArray(children);
  if (reverse) {
    childrenArray = childrenArray.reverse();
  }
  /*
  | Add the position to the children
  */
  const trailingChildrenWithSpacing = childrenArray.map((child: any) => {
    return React.cloneElement(
      child,
      { position: 'absolute' },
      child.props.children
    );
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [trailingChildrenWithSpacing];
};
