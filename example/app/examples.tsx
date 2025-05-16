import { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { ExampleWithCode } from '../components/example/ExampleWithCode';
import { SkeletonExample } from '../components/example/rectangle/SkeletonExample';
import { RectangleExample } from '../components/example/rectangle/RectangleExample';
import { CardFullLayoutSkeleton } from '../components/example/card/CardFullLayoutSkeleton';
import { SkeletonCardExample } from '../components/example/card/SkeletonCardExample';

type ExamplesStatus = Record<string, boolean>;

export default function ExamplesScreen() {
  const [exampleStatus, setExampleStatus] = useState<ExamplesStatus>({});

  const toggleExample = (key: string, value: boolean) => {
    setExampleStatus((prev) => {
      const resetStatus: ExamplesStatus = Object.keys(prev).reduce(
        (acc, currKey) => {
          acc[currKey] = false;
          return acc;
        },
        {} as ExamplesStatus
      );
      return { ...resetStatus, [key]: value };
    });
  };

  const isActive = (key: string) => {
    return exampleStatus[key] ?? false;
  };

  return (
    <Container>
      <Title>Examples</Title>
      <Paragraph>
        Below you can find some examples that show the capabilities of the
        library. There is an example for each one of the property that you can
        customize and additionally some example with more complex content. Each
        example comes with its corresponding code.
      </Paragraph>
      <ExampleWithCode
        title={'Base'}
        description={
          'Base example of the skeleton loader. It shows a simple rectangle without any customization to the skeleton' +
          ' animations and colors.'
        }
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
      >
        <SkeletonExample
          loading={isActive('base')}
          onValueChange={(value) => toggleExample('base', value)}
          bones={[{ style: { width: 300, height: 100 } }]}
        >
          <RectangleExample />
        </SkeletonExample>
      </ExampleWithCode>

      <ExampleWithCode
        title={'Animation with RTL, timing and reverse'}
        description={
          'Animation customized with a duration of 2500ms, direction from right to left and reversed.'
        }
        code={`
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={true}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 2500, direction: 'rightToLeft', reverse: true }}
      />
  );
}

`}
      >
        <SkeletonExample
          loading={isActive('customAnimation')}
          onValueChange={(value) => toggleExample('customAnimation', value)}
          bones={[{ style: { width: 300, height: 100 } }]}
          skeletonAnimation={{
            duration: 2500,
            direction: 'rightToLeft',
            reverse: true,
          }}
        >
          <RectangleExample />
        </SkeletonExample>
      </ExampleWithCode>

      <ExampleWithCode
        title={'Animation Top to Bottom, shimmer and background colors'}
        description={
          'Skeleton example with customized colors and top to bottom animation direction with custom timing.'
        }
        code={`
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={true}
        bones={[{ style: { width: 300, height: 100 } }]}
        colors={{ background: '#00b422', shimmer: '#ff0036' }}
        animation={{
            duration: 2500,
            direction: 'topToBottom',
            reverse: false
        }}
      />
  );
}

`}
      >
        <SkeletonExample
          loading={isActive('topToBottom')}
          onValueChange={(value) => toggleExample('topToBottom', value)}
          bones={[{ style: { width: 300, height: 100 } }]}
          skeletonColors={{ background: '#00b422', shimmer: '#ff0036' }}
          skeletonAnimation={{
            duration: 2500,
            direction: 'topToBottom',
            reverse: false,
          }}
        >
          <RectangleExample />
        </SkeletonExample>
      </ExampleWithCode>

      <ExampleWithCode
        title={
          'Animation Bottom to Top with reverse, shimmer and background colors'
        }
        description={
          'Skeleton example with customized colors and bottom to top animation direction with reverse'
        }
        code={`
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={true}
        colors={{ background: '#ffb422', shimmer: '#ffec36' }}
        animation={{
          duration: 1200,
          direction: 'bottomToTop',
          reverse: true
        }}
      />
  );
}

`}
      >
        <SkeletonExample
          loading={isActive('bottomToTop')}
          onValueChange={(value) => toggleExample('bottomToTop', value)}
          bones={[{ style: { width: 300, height: 100 } }]}
          skeletonColors={{ background: '#ffb422', shimmer: '#ffec36' }}
          skeletonAnimation={{
            duration: 1200,
            direction: 'bottomToTop',
            reverse: true,
          }}
        >
          <RectangleExample />
        </SkeletonExample>
      </ExampleWithCode>

      <ExampleWithCode
        title={'Card with skeleton bones layout and custom colors'}
        description={
          'Skeleton example attached to a more complex view: a card. The bones' +
          ' are defined statically using the bonesLayout prop. Also for this case, color have been ' +
          'customized using the properties shown before'
        }
        code={`
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
`}
      >
        <SkeletonCardExample
          isActive={isActive('cardFullLayoutSkeleton')}
          onValueChange={(value) =>
            toggleExample('cardFullLayoutSkeleton', value)
          }
        >
          <CardFullLayoutSkeleton
            loading={isActive('cardFullLayoutSkeleton')}
          />
        </SkeletonCardExample>
      </ExampleWithCode>
    </Container>
  );
}
