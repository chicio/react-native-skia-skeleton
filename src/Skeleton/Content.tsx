import React from 'react';
import { type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export const Content: React.FC<{
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}> = ({ containerStyle, children }) => (
  <Animated.View entering={FadeIn} style={containerStyle}>
    {children}
  </Animated.View>
);
