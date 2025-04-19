import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';

export default function Index() {
  const [loadingCard, setLoadingCard] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingCard((prevLoadingCard) => !prevLoadingCard);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card loading={loadingCard} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  scrollView: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
  },
});
