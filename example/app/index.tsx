import { Button, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { CardMixedSkeleton } from '../components/CardMixedSkeleton';
import { CardFullLayoutSkeleton } from '../components/CardFullLayoutSkeleton';
import { CardAutomaticSkeleton } from '../components/CardAutomaticSkeleton';

export default function Index() {
  const [loadingCard, setLoadingCard] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Button onPress={() => setLoadingCard(!loadingCard)} title={'Trigger'} />
      <CardMixedSkeleton loading={loadingCard} />
      <CardFullLayoutSkeleton loading={loadingCard} />
      <CardAutomaticSkeleton loading={loadingCard} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
