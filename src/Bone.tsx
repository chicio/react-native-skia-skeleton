import React from 'react';
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

export type BoneMargins = Pick<
  ViewStyle,
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginHorizontal'
  | 'marginVertical'
>;

type BoneBorderRadius = Pick<
  ViewStyle,
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
>;

export type BoneLayout = {
  dimensions: BoneDimensions;
  margins?: BoneMargins;
  border?: BoneBorderRadius;
};

type BoneProps = {
  layout: BoneLayout;
  colors: BoneColors;
  animation: BoneAnimation;
};

export const Bone: React.FC<BoneProps> = ({ layout, colors, animation }) => {
  const { dimensions, margins, border } = layout;

  const isHorizontal =
    animation.direction === 'leftToRight' ||
    animation.direction === 'rightToLeft';

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
  const initialPosition =
    initialPositionFactory[animation.direction](dimensions);

  const animatedValue = useSharedValue(initialPosition);

  animatedValue.value = withRepeat(
    withTiming(-initialPosition, { duration: animation.duration }),
    -1,
    animation.reverse
  );

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
          width: dimensions.width,
          height: dimensions.height,
          backgroundColor: colors.background,
          ...margins,
          ...border,
        },
      ]}
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
