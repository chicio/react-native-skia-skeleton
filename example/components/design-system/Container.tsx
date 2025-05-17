import { Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import type { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: Platform.OS !== 'web' ? Dimensions.get('screen').width : undefined,
    maxWidth: 900,
    alignSelf: 'center',
  },
});
