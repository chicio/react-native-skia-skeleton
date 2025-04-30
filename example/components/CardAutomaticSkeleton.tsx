import { Skeleton } from 'react-native-skia-skeleton';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const CardAutomaticSkeleton: React.FC<{ loading: boolean }> = ({
  loading,
}) => {
  return (
    <Skeleton
      colors={{
        background: '#C1C4E9',
        shimmer: '#F1CEF7',
      }}
      containerStyle={styles.container}
      loading={loading}
    >
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.subtitle}>UI Designer</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Just finished the first draft!</Text>
          <Text style={styles.text}>
            Huge thanks to the team for the feedback!
          </Text>
        </View>
      </View>
    </Skeleton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEE',
  },
  info: {
    marginLeft: 12,
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: 4,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111',
    width: '80%',
    height: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    width: '80%',
    height: 20,
  },
  body: {
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    width: '80%',
    height: 20,
  },
});
