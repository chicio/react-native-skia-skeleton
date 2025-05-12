import { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { RectangleExampleWithCode } from '../components/RectangleExampleWithCode';
import { SkeletonExample } from '../components/SkeletonExample';
import { RectangleExample } from '../components/RectangleExample';
import { CardFullLayoutSkeleton } from '../components/CardFullLayoutSkeleton';
import { Switch, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { borderRadius } from '../components/theme';

type ExamplesStatus = Record<string, boolean>;

export default function ExamplesScreen() {
  const { colors } = useTheme();
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
      <RectangleExampleWithCode
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
      </RectangleExampleWithCode>

      <RectangleExampleWithCode
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
      </RectangleExampleWithCode>

      <RectangleExampleWithCode
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
      </RectangleExampleWithCode>

      <RectangleExampleWithCode
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
      </RectangleExampleWithCode>

      <RectangleExampleWithCode
        title={'Card with skeletong bones layout and custom colors'}
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
        <View
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            backgroundColor: colors.backdrop,
            padding: 16,
            borderRadius,
          }}
        >
          <View style={{ maxWidth: 500, height: 180, width: '100%' }}>
            <CardFullLayoutSkeleton
              loading={isActive('cardFullLayoutSkeleton')}
            />
          </View>
          <Switch
            value={isActive('cardFullLayoutSkeleton')}
            onValueChange={(value) =>
              toggleExample('cardFullLayoutSkeleton', value)
            }
          />
        </View>
      </RectangleExampleWithCode>
    </Container>
  );
}
