import { type FC, type ReactNode, useState } from 'react';
import { StyleSheet, Switch, View, type ViewStyle } from 'react-native';
import { spacing } from './theme';
import { useTheme } from 'react-native-paper';
import { Skeleton } from 'react-native-skia-skeleton';
import type { BonesLayout } from '../../src/Bones/BonesFeatures';
import type { BoneAnimation, BoneColors } from '../../src/Bone/BoneFeatures';

export const SkeletonExample: FC<{
  children: ReactNode;
  bones?: BonesLayout[];
  skeletonContainerStyle?: ViewStyle;
  skeletonColors?: BoneColors;
  skeletonAnimation?: BoneAnimation;
}> = ({
  bones,
  skeletonContainerStyle,
  skeletonColors,
  skeletonAnimation,
  children,
}) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Skeleton
        loading={loading}
        containerStyle={skeletonContainerStyle}
        animation={skeletonAnimation}
        colors={skeletonColors}
        bones={bones}
      >
        {children}
      </Skeleton>
      <Switch value={loading} onValueChange={setLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.spacing2x,
    borderRadius: 8,
    marginVertical: spacing.spacing2x,
    paddingVertical: spacing.spacing2x,
  },
});
