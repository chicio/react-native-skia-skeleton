import React from 'react';
import type {
  BoneAnimation,
  BoneColors,
  BoneLayout,
} from '../Bone/BoneFeatures';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';
import { Bone } from 'react-native-skia-skeleton';

type BonesProps = {
  bonesLayout: BoneLayout[];
  containerStyle?: StyleProp<ViewStyle>;
  colors?: BoneColors;
  animation?: BoneAnimation;
};

export const Bones: React.FC<BonesProps> = ({
  bonesLayout,
  containerStyle,
  colors = { background: '#E1E9EE', shimmer: '#F2F8FC' },
  animation = { duration: 1500, direction: 'leftToRight', reverse: false },
}) => {
  const renderBone = (bone: BoneLayout, key: React.Key) => {
    if (bone.children && bone.children.length > 0) {
      return (
        <View style={bone.style} key={key}>
          {bone.children.map((child, index) =>
            renderBone(child, `${key}-${index}`)
          )}
        </View>
      );
    }

    return (
      <Bone
        style={bone.style}
        colors={colors}
        animation={animation}
        key={key}
      />
    );
  };

  return (
    <View style={[styles.bones, containerStyle]}>
      {bonesLayout.map((bone, index) => renderBone(bone, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  bones: {
    display: 'flex',
  },
});
