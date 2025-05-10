import type { FC, ReactNode } from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { spacing } from './theme';

export const Subtitle: FC<{ children: ReactNode }> = ({ children }) => (
  <Text variant={'headlineSmall'} style={styles.title}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    marginVertical: spacing.spacing2x,
  },
});
