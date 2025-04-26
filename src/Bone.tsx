import React, { useEffect, useState } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import {
  Canvas,
  LinearGradient,
  Rect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

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

export type BoneLayout = Omit<ViewStyle, 'backgroundColor'>;

type BoneProps = {
  layout: BoneLayout;
  colors: BoneColors;
  animation: BoneAnimation;
};

const initialPositionFactory: Record<
  BoneAnimationDirection,
  (dimensions: BoneDimensions) => number
> = {
  ['leftToRight']: (currentDimensions: BoneDimensions) =>
    -currentDimensions.width,
  ['rightToLeft']: (currentDimensions: BoneDimensions) =>
    currentDimensions.width,
  ['topToBottom']: (currentDimensions: BoneDimensions) =>
    -currentDimensions.height,
  ['bottomToTop']: (currentDimensions: BoneDimensions) =>
    currentDimensions.height,
};

export const Bone: React.FC<BoneProps> = ({ layout, colors, animation }) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const animatedValue = useSharedValue(0);

  useEffect(() => {
    if (dimensions.width === 0 && dimensions.height === 0) {
      return;
    }

    const initialPosition =
      initialPositionFactory[animation.direction](dimensions);

    animatedValue.value = initialPosition;
    animatedValue.value = withRepeat(
      withTiming(-initialPosition, { duration: animation.duration }),
      -1,
      animation.reverse
    );
  }, [dimensions, animatedValue, animation]);

  const isHorizontal =
    animation.direction === 'leftToRight' ||
    animation.direction === 'rightToLeft';

  const shimmer = useAnimatedStyle(() =>
    isHorizontal
      ? { transform: [{ translateX: animatedValue.value }] }
      : { transform: [{ translateY: animatedValue.value }] }
  );

  const gradientEnd = isHorizontal
    ? vec(dimensions.width, 0)
    : vec(0, dimensions.height);

  return (
    <View
      style={[
        styles.container,
        {
          ...layout,
          backgroundColor: colors.background,
        },
      ]}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimensions({ width, height });
      }}
    >
      <Animated.View style={[StyleSheet.absoluteFill, shimmer]}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={dimensions.width} height={dimensions.height}>
            <LinearGradient
              start={vec(0, 0)}
              end={gradientEnd}
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
