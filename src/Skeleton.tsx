import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import {
  type BoneAnimation,
  type BoneColors,
  type BoneLayout,
} from './Bone/BoneFeatures';
import { Bone } from './Bone/Bone';

type SkeletonProps = {
  loading: boolean;
  bonesLayout: BoneLayout[];
  containerStyle?: ViewStyle;
  colors?: BoneColors;
  animation?: BoneAnimation;
  children?: React.ReactNode;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  loading,
  containerStyle,
  bonesLayout,
  colors = { background: '#E1E9EE', shimmer: '#F2F8FC' },
  animation = { duration: 1500, direction: 'leftToRight', reverse: false },
  children,
}) =>
  loading ? (
    <View style={[styles.bones, containerStyle]}>
      {bonesLayout.map((bone, index) => (
        <Bone
          style={bone.style}
          colors={colors}
          animation={animation}
          key={index}
        />
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
