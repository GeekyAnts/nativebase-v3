import React from 'react';
import { Box } from '../../primitives';
import { TabBarContext, ITabProps, ITabsContextProps } from './index';
import { TouchableOpacity } from 'react-native';
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
  }: ITabsContextProps = React.useContext(TabBarContext);
  const isOpen = activeIndex === index;
  const tabStyle = isOpen ? activeTabStyle : inactiveTabStyle;
  const pressHandler = () => {
    changeHandler && changeHandler(index);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityRole="radio"
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
