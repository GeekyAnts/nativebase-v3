import React from 'react';
import {
  Animated,
  Easing,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { getContainerStyles } from './getContainerStyles';
const STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN',
};
import { IMenuProps, MenuContext } from './props';
const animationDuration = 300;
const EASING = Easing.bezier(0.4, 0, 0.2, 1);

class Menu extends React.Component<IMenuProps, any> {
  _container = null;
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      menuState: STATES.HIDDEN,
      top: 0,
      left: 0,
      menuWidth: 0,
      menuHeight: 0,
      buttonWidth: 0,
      buttonHeight: 0,
      menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
      opacityAnimation: new Animated.Value(0),
    };
  }

  _onMenuLayout = (e: any) => {
    if (this.state.menuState === STATES.ANIMATING) {
      return;
    }
    const { width, height } = e.nativeEvent.layout;
    this.setState(
      {
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height,
      },
      () => {
        Animated.parallel([
          Animated.timing(this.state.menuSizeAnimation, {
            toValue: { x: width, y: height },
            duration: animationDuration,
            easing: EASING,
            useNativeDriver: false,
          }),
          Animated.timing(this.state.opacityAnimation, {
            toValue: 1,
            duration: animationDuration,
            easing: EASING,
            useNativeDriver: false,
          }),
        ]).start();
      }
    );
  };

  show = () => {
    if (this._container) {
      // @ts-ignore
      this._container.measureInWindow(
        (left: any, top: any, buttonWidth: any, buttonHeight: any) => {
          this.setState({
            buttonHeight,
            buttonWidth,
            left,
            menuState: STATES.SHOWN,
            top,
          });
        }
      );
    }
  };

  hide = (onHidden?: any) => {
    Animated.timing(this.state.opacityAnimation, {
      toValue: 0,
      duration: animationDuration,
      easing: EASING,
      useNativeDriver: false,
    }).start(() => {
      this.setState(
        {
          menuState: STATES.HIDDEN,
          menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
          opacityAnimation: new Animated.Value(0),
        },
        () => {
          if (onHidden) {
            onHidden();
          }
          if (Platform.OS !== 'ios' && this.props.onClose) {
            this.props.onClose();
          }
        }
      );
    });
  };

  _hide = () => {
    this.hide();
  };
  render() {
    const {
      menuSizeAnimation,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      opacityAnimation,
    } = this.state;

    let { menuSize, menuContainerStyle } = getContainerStyles(
      this.state.top + 76,
      this.state.left + 18,
      menuSizeAnimation,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      opacityAnimation
    );

    const { menuState } = this.state;
    const animationStarted = menuState === STATES.ANIMATING;
    const modalVisible = menuState === STATES.SHOWN || animationStarted;
    const {
      testID,
      trigger,
      style,
      children,
      onOpen,
      onClose,
      closeOnSelect = true,
    } = this.props;
    const closeMenu = () => {
      onClose && onClose();
      this.hide();
    };
    let triggerElement: any = trigger(
      {
        onPress: () => {
          if (this.state.open) {
            closeMenu();
          } else {
            this.show();
            onOpen && onOpen();
          }
        },
      },
      { open: this.state.open }
    );
    return (
      <MenuContext.Provider
        value={{ open: this.state.open, closeMenu, closeOnSelect }}
      >
        <View
          ref={(ref: any) => {
            this._container = ref;
          }}
          collapsable={false}
          testID={testID}
        >
          {triggerElement}
          <Modal
            visible={modalVisible}
            onRequestClose={this._hide}
            supportedOrientations={[
              'portrait',
              'portrait-upside-down',
              'landscape',
              'landscape-left',
              'landscape-right',
            ]}
            transparent
          >
            <TouchableWithoutFeedback onPress={this._hide}>
              <View style={StyleSheet.absoluteFill}>
                <Animated.View
                  onLayout={this._onMenuLayout}
                  style={[
                    styles.shadowMenuContainer,
                    menuContainerStyle,
                    style,
                  ]}
                >
                  <Animated.View
                    style={[styles.menuContainer, animationStarted && menuSize]}
                  >
                    {children}
                  </Animated.View>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </MenuContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  shadowMenuContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 4,
    opacity: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.14,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  menuContainer: {
    overflow: 'hidden',
  },
});

export { Menu };
export { default as MenuItem } from './MenuItem';
