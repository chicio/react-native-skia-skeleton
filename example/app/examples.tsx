import { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { RectangleExampleWithCode } from '../components/RectangleExampleWithCode';

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
      <RectangleExampleWithCode
        title={'Base'}
        description={
          'Base example of the skeleton loader. It shows a simple rectangle without any customization to the skeleton' +
          ' animations and colors.'
        }
        exampleIdentifier={'base'}
        isActive={isActive}
        toggleExample={toggleExample}
        bones={[{ style: { width: 300, height: 100 } }]}
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
      />

      <RectangleExampleWithCode
        title={'Custom animation with RTL, timing and reverse'}
        description={
          'Base example of the skeleton loader. It shows a simple rectangle without any customization to the skeleton' +
          ' animations and colors.'
        }
        exampleIdentifier={'customAnimation'}
        isActive={isActive}
        toggleExample={toggleExample}
        bones={[{ style: { width: 300, height: 100 } }]}
        skeletonAnimation={{
          duration: 2500,
          direction: 'rightToLeft',
          reverse: true,
        }}
        code={`
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={loadingCard}
        bones={[{ style: { width: 300, height: 100 } }]}
        animation={{ duration: 2500, direction: 'rightToLeft', reverse: true }}
      />
  );
}

`}
      />
    </Container>
  );
}
