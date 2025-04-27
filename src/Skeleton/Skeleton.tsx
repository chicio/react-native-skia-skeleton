import React from 'react';
import { type ViewStyle } from 'react-native';
import {
  type BoneAnimation,
  type BoneColors,
  type BoneLayout,
} from '../Bone/BoneFeatures';
import { Bones } from '../Bones/Bones';
import { Content } from './Content';

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
    <Bones
      bonesLayout={bonesLayout}
      colors={colors}
      animation={animation}
      containerStyle={containerStyle}
    />
  ) : (
    <Content containerStyle={containerStyle}>{children}</Content>
  );
