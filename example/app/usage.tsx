import { Text } from 'react-native-paper';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { borderRadius } from '../components/theme';
import { Subtitle } from '../components/Subtitle';
import { StyleSheet, View } from 'react-native';
import { CodeExample } from '../components/CodeExample';

const props = [
  {
    name: 'loading',
    type: 'boolean',
    optional: false,
    description: 'Whether the skeleton should be visible',
  },
  {
    name: 'bones',
    type: 'BonesLayout[]',
    optional: true,
    description: 'List of bones to render as placeholders.',
  },
  {
    name: 'containerStyle',
    type: 'ViewStyle',
    optional: true,
    description: 'Style applied to the container View',
  },
  {
    name: 'colors',
    type: 'BoneColors',
    optional: true,
    description:
      'Custom shimmer colors. It is an object with two properties: background and shimmer.',
  },
  {
    name: 'animation',
    type: 'BoneAnimation',
    optional: true,
    description:
      'Animation type for the shimmer effect. It is an object with three properties: duration, direction and reverse.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    optional: true,
    description: 'Content to render once loading is false',
  },
];

export default function UsageScreen() {
  return (
    <Container>
      <Title>Installation</Title>
      <Paragraph>
        You can install{' '}
        <Text style={styles.bold}>react-native-skia-skeleton</Text> with npm or
        yarn:
      </Paragraph>
      <CodeExample
        code={`npm install react-native-skia-skeleton`}
        language="bash"
      />
      <CodeExample
        code={`yarn add react-native-skia-skeleton`}
        language="bash"
      />
      <Paragraph>
        This library requires{' '}
        <Text style={styles.bold}>react-native-reanimated</Text> and{' '}
        <Text style={styles.bold}>react-native-skia</Text> to be installed and
        configured in your project.
      </Paragraph>

      <Subtitle>Usage</Subtitle>
      <Paragraph>
        To start use this library you just need to import the Skeleton component
        and setting the loading props to true, and declare at least one bone
        with a specified with and height.
      </Paragraph>
      <CodeExample
        code={`
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={true}
        bones={[{ style: { width: 300, height: 100 } }]}
      />
  );
}

`}
        language={'typescript'}
      />

      <Subtitle>Skeleton Props</Subtitle>
      <Paragraph>
        Below you can find the props supported by the skeleton components. Check
        the example section for more details.
      </Paragraph>
      <View style={styles.table}>
        <View style={[styles.row, styles.header]}>
          <Text style={[styles.cell, styles.headerText]}>Prop</Text>
          <Text style={[styles.cell, styles.headerText]}>Type</Text>
          <Text style={[styles.cell, styles.headerText]}>Optional</Text>
          <Text style={[styles.cell, styles.headerText, styles.description]}>
            Description
          </Text>
        </View>
        {props.map((prop) => (
          <View key={prop.name} style={styles.row}>
            <Text style={styles.cell}>
              <CodeExample
                language={'typescript'}
                code={prop.name}
                inline={true}
              />
            </Text>
            <Text style={styles.cell}>
              <CodeExample
                language={'typescript'}
                code={prop.type}
                inline={true}
              />
            </Text>
            <Text style={styles.cell}>{prop.optional ? 'Yes' : 'No'}</Text>
            <Text style={[styles.cell, styles.description]}>
              {prop.description}
            </Text>
          </View>
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  table: {
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#333',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  description: {
    flex: 2,
  },
});
