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
import type { BoneAnimation, BoneColors, BoneStyle } from './BoneFeatures';
import { useBoneAnimation } from './useBoneAnimation';

export type BoneProps = {
  style: BoneStyle;
  colors: BoneColors;
  animation: BoneAnimation;
};

export const Bone: React.FC<BoneProps> = ({ style, colors, animation }) => {
  const { onLayout, boneAnimation, boneGradientEnd, boneDimensions } =
    useBoneAnimation(animation);

  return (
    <View
      style={[
        styles.container,
        {
          ...style,
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
