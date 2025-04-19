import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { View, type ViewStyle, StyleSheet } from 'react-native';
import {
  Bone,
  type BoneAnimation,
  type BoneColors,
  type BoneLayout,
} from './Bone';

type SkeletonProps = {
  loading: boolean;
  bones: BoneLayout[];
  containerStyle?: ViewStyle;
  colors?: BoneColors;
  animation?: BoneAnimation;
  children?: React.ReactNode;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  loading,
  containerStyle,
  bones,
  colors = { background: '#E1E9EE', shimmer: '#F2F8FC' },
  animation = { duration: 1500, direction: 'leftToRight', reverse: false },
  children,
}) =>
  loading ? (
    <View style={[styles.bones, containerStyle]}>
      {bones.map((bone) => (
        <Bone layout={bone} colors={colors} animation={animation} />
      ))}
    </View>
  ) : (
    <Animated.View entering={FadeIn} style={[styles.content, containerStyle]}>
      {children}
    </Animated.View>
  );

const styles = StyleSheet.create({
  bones: {
    display: 'flex',
  },
  content: {
    display: 'flex',
  },
});
