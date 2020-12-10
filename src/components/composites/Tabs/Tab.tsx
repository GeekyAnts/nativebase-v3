import React from 'react';
import { Box } from '../../primitives';
import { TabsContext, ITabProps, ITabsContextProps } from './index';
import { AccessibilityProps, TouchableOpacity } from 'react-native';
import { omitUndefined } from '../../../theme/tools/utils';

const Tab = ({
  index,
  children,
  isDisabled,
  style,
  _active,
  _disabled,
  ...props
}: ITabProps) => {
  const newProps = omitUndefined(props);
  const {
    activeIndex,
    inactiveTabStyle,
    activeTabStyle,
    changeHandler,
  }: ITabsContextProps = React.useContext(TabsContext);
  const isOpen = activeIndex === index;
  const tabStyle = isOpen ? activeTabStyle : inactiveTabStyle;
  const pressHandler = () => {
    changeHandler && changeHandler(index);
  };

  const accessibilityProps: AccessibilityProps = {
    accessible: true,
    accessibilityRole: 'tab',
    accessibilityState: {
      disabled: _disabled,
      selected: isOpen,
    },
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      {...accessibilityProps}
    >
      <Box
        {...tabStyle}
        {...newProps}
        style={[style, isOpen && _active, isDisabled && _disabled]}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default Tab;
