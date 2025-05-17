import React, { type ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { spacing } from './theme';
import { Text } from 'react-native-paper';

export const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Text variant={'bodyLarge'} style={styles.paragraph}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: spacing.base,
  },
});
