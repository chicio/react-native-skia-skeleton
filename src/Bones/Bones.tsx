import React from 'react';
import type {
  BoneAnimation,
  BoneColors,
  BoneLayout,
} from '../Bone/BoneFeatures';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { Bone } from 'react-native-skia-skeleton';

type BonesProps = {
  bonesLayout: BoneLayout[];
  containerStyle?: ViewStyle;
  colors?: BoneColors;
  animation?: BoneAnimation;
};

export const Bones: React.FC<BonesProps> = ({
  bonesLayout,
  containerStyle,
  colors = { background: '#E1E9EE', shimmer: '#F2F8FC' },
  animation = { duration: 1500, direction: 'leftToRight', reverse: false },
}) => (
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
);

const styles = StyleSheet.create({
  bones: {
    // display: 'flex',
  },
});
