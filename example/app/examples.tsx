import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { Skeleton } from 'react-native-skia-skeleton';
import { CodeExample } from '../components/CodeExample';

function ExampleCard({ title, description, children, active, onToggle }) {
  return (
    <Card mode="outlined" style={{ marginBottom: 16 }}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph style={{ marginBottom: 8 }}>{description}</Paragraph>
        <Button
          mode="contained"
          onPress={onToggle}
          style={{ marginBottom: 12 }}
        >
          {active ? 'Hide skeleton' : 'Show example'}
        </Button>
        {children}
      </Card.Content>
    </Card>
  );
}

export default function ExamplesScreen() {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  const toggleExample = (key: string) => {
    setActiveExample((prev) => (prev === key ? null : key));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        maxWidth: 900,
        alignSelf: 'center',
      }}
    >
      <ExampleCard
        title="Basic Card Skeleton"
        description="A simple card skeleton layout simulating a content card."
        active={activeExample === 'card'}
        onToggle={() => toggleExample('card')}
      >
        <CodeExample language={'typescript'} code={'let a = 10'} />
        {activeExample === 'card' ? (
          <Skeleton
            loading
            width={300}
            height={180}
            radius={12}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={{
              width: 300,
              height: 180,
              backgroundColor: '#ccc',
              borderRadius: 12,
              alignSelf: 'center',
            }}
          />
        )}
      </ExampleCard>

      <ExampleCard
        title="Rounded Skeleton"
        description="A circular skeleton to simulate avatar or profile image loading."
        active={activeExample === 'circle'}
        onToggle={() => toggleExample('circle')}
      >
        {activeExample === 'circle' ? (
          <Skeleton
            loading
            width={100}
            height={100}
            radius={50}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: '#ccc',
              alignSelf: 'center',
            }}
          />
        )}
      </ExampleCard>

      <ExampleCard
        title="RTL Shimmer"
        description="An example using the right-to-left shimmer direction."
        active={activeExample === 'rtl'}
        onToggle={() => toggleExample('rtl')}
      >
        {activeExample === 'rtl' ? (
          <Skeleton
            loading
            width={300}
            height={100}
            rtl
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={{
              width: 300,
              height: 100,
              backgroundColor: '#ccc',
              alignSelf: 'center',
            }}
          />
        )}
      </ExampleCard>
    </ScrollView>
  );
}
