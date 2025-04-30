import React from 'react';
import { type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface ContentProps {
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({
  containerStyle,
  children,
}) => (
  <Animated.View entering={FadeIn} style={containerStyle}>
    {children}
  </Animated.View>
);
