import React from 'react';
import { type ViewStyle } from 'react-native';
import { type BoneAnimation, type BoneColors } from '../Bone/BoneFeatures';
import { Bones } from '../Bones/Bones';
import { Content } from './Content';
import type { BonesLayout } from '../Bones/BonesFeatures';
import { defaultAnimation, defaultColors } from './defaults';

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
  colors = defaultColors,
  animation = defaultAnimation,
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
