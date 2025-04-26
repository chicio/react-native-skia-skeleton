import type {
  BoneAnimation,
  BoneAnimationDirection,
  BoneDimensions,
} from './BoneFeatures';
import { useCallback, useEffect, useState } from 'react';
import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { LayoutChangeEvent } from 'react-native';
import { vec } from '@shopify/react-native-skia';

const getInitialPosition: Record<
  BoneAnimationDirection,
  (dimensions: BoneDimensions) => number
> = {
  ['leftToRight']: (dimensions: BoneDimensions) => -dimensions.width,
  ['rightToLeft']: (dimensions: BoneDimensions) => dimensions.width,
  ['topToBottom']: (dimensions: BoneDimensions) => -dimensions.height,
  ['bottomToTop']: (dimensions: BoneDimensions) => dimensions.height,
};

export const useBoneAnimation = (animation: BoneAnimation) => {
  const animatedValue = useSharedValue(0);
  const [boneDimensions, setBoneDimensions] = useState<BoneDimensions>({
    width: 0,
    height: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setBoneDimensions({ width, height });
  }, []);

  useEffect(() => {
    if (boneDimensions.width === 0 && boneDimensions.height === 0) {
      return;
    }

    const initialPosition =
      getInitialPosition[animation.direction](boneDimensions);

    animatedValue.value = initialPosition;
    animatedValue.value = withRepeat(
      withTiming(-initialPosition, { duration: animation.duration }),
      -1,
      animation.reverse
    );
  }, [boneDimensions, animatedValue, animation]);

  const isHorizontal = useDerivedValue(
    () =>
      animation.direction === 'leftToRight' ||
      animation.direction === 'rightToLeft'
  );

  const boneAnimation = useAnimatedStyle(() =>
    isHorizontal.value
      ? { transform: [{ translateX: animatedValue.value }] }
      : { transform: [{ translateY: animatedValue.value }] }
  );

  const boneGradientEnd = isHorizontal.value
    ? vec(boneDimensions.width, 0)
    : vec(0, boneDimensions.height);

  return {
    onLayout,
    boneDimensions,
    boneGradientEnd,
    boneAnimation,
  };
};
