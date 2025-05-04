import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { FC, ReactNode } from 'react';

export const RectangleExample: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.rectangle,
        {
          backgroundColor: colors.inversePrimary,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 300,
    height: 100,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
