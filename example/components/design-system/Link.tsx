import { type Href, Link as ExpoLink } from 'expo-router';
import type { FC } from 'react';
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Link: FC<{ href: Href; children: string }> = ({
  href,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <ExpoLink href={href} style={[styles.link, { color: colors.primary }]}>
      {children}
    </ExpoLink>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
