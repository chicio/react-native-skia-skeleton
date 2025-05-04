import { ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

export default function UsageScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        maxWidth: 900,
        alignSelf: 'center',
      }}
    >
      <Card mode="outlined" style={{ marginBottom: 16 }}>
        <Card.Content>
          <Title>Installation</Title>
          <Paragraph>
            You can install{' '}
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>
              react-native-skia-skeleton
            </Text>{' '}
            with npm or yarn:
          </Paragraph>
          <Paragraph style={{ fontFamily: 'monospace', marginVertical: 8 }}>
            npm install react-native-skia-skeleton
          </Paragraph>
          <Paragraph>or</Paragraph>
          <Paragraph style={{ fontFamily: 'monospace', marginVertical: 8 }}>
            yarn add react-native-skia-skeleton
          </Paragraph>
        </Card.Content>
      </Card>

      <Card mode="outlined" style={{ marginBottom: 16 }}>
        <Card.Content>
          <Title>Peer Dependencies</Title>
          <Paragraph>
            This library requires{' '}
            <Text style={{ fontWeight: 'bold' }}>react-native-reanimated</Text>{' '}
            and <Text style={{ fontWeight: 'bold' }}>react-native-skia</Text> to
            be installed and configured in your project.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card mode="outlined" style={{ marginBottom: 16 }}>
        <Card.Content>
          <Title>Usage</Title>
          <Paragraph>Here's an example usage in an Expo project:</Paragraph>
          <Paragraph style={{ fontFamily: 'monospace', marginVertical: 8 }}>
            {`import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
    <Skeleton loading width={300} height={100} />
  );
}`}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card mode="outlined">
        <Card.Content>
          <Title>Skeleton Props</Title>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>loading</Text>: boolean —
            whether the skeleton should be visible
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>width</Text>: number — width of
            the skeleton shape
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>height</Text>: number — height
            of the skeleton shape
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>radius</Text>: number — corner
            radius of the skeleton (optional)
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>shimmerColors</Text>: [string,
            string, string] — color gradient for shimmer (optional)
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>rtl</Text>: boolean — enable
            right-to-left animation (optional)
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>style</Text>: ViewStyle — pass
            custom styles (optional)
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
