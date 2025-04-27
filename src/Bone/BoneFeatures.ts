import type { StyleProp, ViewStyle } from 'react-native';

export type BoneAnimationDirection =
  | 'leftToRight'
  | 'rightToLeft'
  | 'topToBottom'
  | 'bottomToTop';

export type BoneColors = {
  background: string;
  shimmer: string;
};

export type BoneAnimation = {
  duration: number;
  direction: BoneAnimationDirection;
  reverse: boolean;
};

export type BoneStyle = StyleProp<ViewStyle>;

export type BoneFeatures = {
  style: BoneStyle;
  colors: BoneColors;
  animation: BoneAnimation;
};
