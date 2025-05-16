import { Skeleton } from 'react-native-skia-skeleton';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CardFullLayoutSkeletonProps {
  loading: boolean;
}

export const CardFullLayoutSkeleton: React.FC<CardFullLayoutSkeletonProps> = ({
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
      bones={[
        {
          key: 'root',
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            padding: 16,
            borderRadius: 8,
            backgroundColor: '#B39DDB',
          },
          children: [
            {
              key: 'header',
              style: {
                width: '100%',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              },
              children: [
                {
                  key: 'image',
                  style: {
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                  },
                },
                {
                  style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  },
                  children: [
                    {
                      style: {
                        height: 16,
                        width: '80%',
                        borderRadius: 4,
                      },
                    },
                    {
                      style: {
                        height: 16,
                        width: '80%',
                        borderRadius: 4,
                      },
                    },
                  ],
                },
              ],
            },
            {
              style: {
                width: '100%',
                borderRadius: 4,
                gap: 4,
              },
              children: [
                {
                  style: {
                    width: '100%',
                    height: 16,
                    borderRadius: 4,
                  },
                },
                {
                  style: {
                    width: '60%',
                    height: 16,
                    borderRadius: 4,
                  },
                },
              ],
            },
            {
              style: {
                width: '100%',
                borderRadius: 4,
                gap: 4,
              },
              children: [
                {
                  style: {
                    width: '100%',
                    height: 16,
                    borderRadius: 4,
                  },
                },
                {
                  style: {
                    width: '60%',
                    height: 16,
                    borderRadius: 4,
                  },
                },
              ],
            },
          ],
        },
      ]}
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
          <Text style={styles.text}>
            Just finished the first draft of the new onboarding flow. Can’t wait
            to share it!
          </Text>
          <Text style={styles.text}>
            Also, huge thanks to the team for the feedback during our last
            review. It was really helpful!
          </Text>
        </View>
      </View>
    </Skeleton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
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
