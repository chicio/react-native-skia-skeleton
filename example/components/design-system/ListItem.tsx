import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

type ListItemProps = { text: string };

export const ListItem: FC<ListItemProps> = ({ text }) => (
  <View style={styles.item}>
    <Icon size={8} source={'circle'} />
    <Text variant={'bodyLarge'}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
});
