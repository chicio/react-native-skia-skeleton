import type { FC, ReactNode } from 'react';
import { Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { spacing } from './theme';

export const Title: FC<{ children: ReactNode }> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Text
      variant={'headlineLarge'}
      style={[styles.title, { color: colors.primary }]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: spacing.spacing2x,
  },
});
