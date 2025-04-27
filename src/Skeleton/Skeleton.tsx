import React from 'react';
import { type ViewStyle } from 'react-native';
import { type BoneAnimation, type BoneColors } from '../Bone/BoneFeatures';
import { Bones } from '../Bones/Bones';
import { Content } from './Content';
import type { BonesLayout } from '../Bones/BonesFeatures';

type SkeletonProps = {
  loading: boolean;
  bones: BonesLayout[];
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
    <Bones
      bonesFeatures={{
        colors,
        animation,
        layout: bones,
      }}
      containerStyle={containerStyle}
    />
  ) : (
    <Content containerStyle={containerStyle}>{children}</Content>
  );
