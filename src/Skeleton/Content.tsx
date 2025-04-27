import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export const Content: React.FC<{
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}> = ({ containerStyle, children }) => (
  <Animated.View entering={FadeIn} style={[styles.content, containerStyle]}>
    {children}
  </Animated.View>
);

const styles = StyleSheet.create({
  content: {
    // display: 'flex',
  },
});
