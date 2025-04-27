import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Canvas,
  LinearGradient,
  Rect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import Animated from 'react-native-reanimated';
import type { BoneFeatures } from './BoneFeatures';
import { useBoneAnimation } from './useBoneAnimation';

export type BoneProps = {
  features: BoneFeatures;
};

export const Bone: React.FC<BoneProps> = ({ features }) => {
  const { style, animation, colors } = features;
  const { onLayout, boneAnimation, boneGradientEnd, boneDimensions } =
    useBoneAnimation(animation);

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: colors.background,
        },
      ]}
      onLayout={onLayout}
    >
      <Animated.View style={[StyleSheet.absoluteFill, boneAnimation]}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect
            x={0}
            y={0}
            width={boneDimensions.width}
            height={boneDimensions.height}
          >
            <LinearGradient
              start={vec(0, 0)}
              end={boneGradientEnd}
              colors={[
                Skia.Color(colors.background),
                Skia.Color(colors.shimmer),
                Skia.Color(colors.background),
              ]}
            />
          </Rect>
        </Canvas>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
