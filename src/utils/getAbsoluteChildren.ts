import React from "react";

export default (children: JSX.Element[] | JSX.Element) => {
  const childrenArray = React.Children.toArray(children);
  /*
  | Add the position to the children
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trailingChildrenWithSpacing = childrenArray.map((child: any) => {
    return React.cloneElement(child, { position: "absolute" }, child.props.children);
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [trailingChildrenWithSpacing];
};
