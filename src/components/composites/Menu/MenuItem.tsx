import React from 'react';
import type { IMenuContextProps } from './props';
import { MenuContext } from './Menu';
import { usePropsConfig, Text, themeTools } from '@native-base/v3';
import { TouchableItem } from './TouchableItem';
import type { IMenuItemProps } from './props';

export const MenuItem = ({
  children,
  onPress,
  style,
  textStyle,
  ...props
}: IMenuItemProps) => {
  const { closeMenu, closeOnSelect }: IMenuContextProps = React.useContext(
    MenuContext
  );
  const newProps = usePropsConfig('MenuItem', props);
  let allProps = {
    ...newProps,
    ...(newProps.isDisabled ? newProps._disabled : {}),
  };

  const [textProps, touchProps] = themeTools.extractInObject(allProps, [
    'color',
    'fontWeight',
    'fontStyle',
    'fontFamily',
    'fontSize',
    'padding',
    'px',
    'py',
    'textAlign',
  ]);
  return (
    <TouchableItem
      {...touchProps}
      style={style}
      onPress={(e: any) => {
        if (!props.isDisabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            closeMenu();
          }
        }
      }}
    >
      <>
        {React.Children.map(children, (child) => {
          if (typeof child === 'string') {
            return (
              <Text {...textProps} style={textStyle}>
                {child}
              </Text>
            );
          } else {
            return child;
          }
        })}
      </>
    </TouchableItem>
  );
};
