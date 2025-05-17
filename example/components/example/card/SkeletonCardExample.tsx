import type { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { borderRadius, spacing } from '../../design-system/theme';
import { CardExample } from './CardExample';
import { useTheme } from 'react-native-paper';
import { ExampleSwitch } from '../ExampleSwitch';

export const SkeletonCardExample: FC<{
  isActive: boolean;
  onValueChange: (loading: boolean) => void;
  children: ReactNode;
}> = ({ isActive, onValueChange, children }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.backdrop }]}>
      <CardExample>{children}</CardExample>
      <ExampleSwitch isActive={isActive} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.spacing2x,
    gap: spacing.spacing2x,
    padding: 16,
    borderRadius,
  },
});
