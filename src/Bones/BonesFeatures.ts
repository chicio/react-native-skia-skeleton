import type {
  BoneAnimation,
  BoneColors,
  BoneStyle,
} from '../Bone/BoneFeatures';

export type BonesLayout = {
  style: BoneStyle;
  children?: BonesLayout[];
};

export type BonesFeatures = {
  layout: BonesLayout[];
  colors: BoneColors;
  animation: BoneAnimation;
};
