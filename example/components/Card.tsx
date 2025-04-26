import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Skeleton } from 'react-native-skia-skeleton';

export const Card: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { width } = useWindowDimensions();
  const cardMargins = 20;

  return (
    <View style={[styles.card, { width: width - cardMargins }]}>
      <View style={styles.header}>
        <Skeleton
          loading={loading}
          bones={[
            {
              width: 48,
              height: 48,
              borderRadius: 24,
            },
          ]}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
        </Skeleton>
        <Skeleton
          loading={loading}
          containerStyle={styles.info}
          bones={[
            {
              display: 'flex',
              width: '100%',
              height: 16,
              borderRadius: 4,
            },
            {
              width: 200,
              height: 16,
              borderRadius: 4,
              marginTop: 4,
            },
          ]}
        >
          <Text style={styles.name}>Jane Doe</Text>
          <Text style={styles.subtitle}>UI Designer</Text>
        </Skeleton>
      </View>
      <Skeleton
        loading={loading}
        containerStyle={styles.body}
        bones={[
          {
            width: width - cardMargins - 32,
            height: 16,
            borderRadius: 4,
          },
          {
            width: 200,
            height: 16,
            borderRadius: 4,
            marginTop: 4,
          },
          {
            width: width - cardMargins - 32,
            height: 16,
            borderRadius: 4,
            marginTop: 10,
          },
          {
            width: 200,
            height: 16,
            borderRadius: 4,
            marginTop: 4,
          },
        ]}
      >
        <Text style={styles.text}>
          Just finished the first draft of the new onboarding flow. Can’t wait
          to share it!
        </Text>
        <Text style={styles.text}>
          Also, huge thanks to the team for the feedback during our last review.
        </Text>
      </Skeleton>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
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
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  body: {
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
});
