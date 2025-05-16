import type { FC } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { spacing } from '../theme';
import { Text } from 'react-native-paper';

interface ExampleSwitchProps {
  isActive: boolean;
  onValueChange: (loading: boolean) => void;
}

export const ExampleSwitch: FC<ExampleSwitchProps> = ({
  isActive,
  onValueChange,
}) => (
  <View style={styles.container}>
    <Text variant={'labelLarge'} style={styles.text}>
      Try It!
    </Text>
    <Switch value={isActive} onValueChange={(value) => onValueChange(value)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.base,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
