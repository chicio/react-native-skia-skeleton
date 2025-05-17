import { StyleSheet, View } from 'react-native';
import type { FC, ReactNode } from 'react';

export const CardExample: FC<{
  children: ReactNode;
}> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    height: 180,
    width: '100%',
  },
});
