import React from 'react';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';
import { Bone } from 'react-native-skia-skeleton';
import type { BonesFeatures, BonesLayout } from './BonesFeatures';

type BonesProps = {
  bonesFeatures: BonesFeatures;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Bones: React.FC<BonesProps> = ({
  bonesFeatures,
  containerStyle,
}) => {
  const { layout, colors, animation } = bonesFeatures;

  const renderBone = (currentLayout: BonesLayout, parentKey: React.Key) => {
    const { children, style, key } = currentLayout;

    if (children && children.length > 0) {
      return (
        <View style={style} key={parentKey}>
          {children.map((child, index) =>
            renderBone(child, `${parentKey}-${key ?? index}-${index}`)
          )}
        </View>
      );
    }

    return (
      <Bone
        features={{
          style: currentLayout.style,
          colors,
          animation,
        }}
        key={parentKey}
      />
    );
  };

  return (
    <View style={[styles.bones, containerStyle]}>
      {layout.map((bone, index) => renderBone(bone, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  bones: {
    display: 'flex',
  },
});
