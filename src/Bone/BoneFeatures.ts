import type { ViewStyle } from 'react-native';

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

export type BoneDimensions = {
  width: number;
  height: number;
};

export type BoneStyle = Omit<ViewStyle, 'backgroundColor'>;

export type BoneLayout = {
  style: BoneStyle;
  children?: BoneLayout[];
};
