import { Button, ScrollView, StyleSheet } from 'react-native';
import { Skeleton } from 'react-native-skia-skeleton';
import { useState } from 'react';

export default function Misc() {
  const [loadingCard, setLoadingCard] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={() => setLoadingCard(!loadingCard)} title={'Trigger'} />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
      />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 1500, direction: 'rightToLeft', reverse: false }}
      />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 1200, direction: 'leftToRight', reverse: false }}
        colors={{ background: '#77A6B6', shimmer: '#9DC3C2' }}
      />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 1200, direction: 'topToBottom', reverse: false }}
        colors={{ background: '#ffb422', shimmer: '#ffec36' }}
      />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 1200, direction: 'bottomToTop', reverse: false }}
        colors={{ background: '#ffb422', shimmer: '#ffec36' }}
      />
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 2000, direction: 'leftToRight', reverse: true }}
        colors={{ background: '#00b422', shimmer: '#ff0036' }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
});
