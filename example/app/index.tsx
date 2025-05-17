import { FlatList, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Paragraph } from '../components/design-system/Paragraph';
import { Title } from '../components/design-system/Title';
import { Link } from '../components/design-system/Link';
import { useState } from 'react';
import { Container } from '../components/design-system/Container';
import { ListItem } from '../components/design-system/ListItem';
import { CardFullLayoutSkeleton } from '../components/example/card/CardFullLayoutSkeleton';
import { SkeletonCardExample } from '../components/example/card/SkeletonCardExample';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Title>react-native-skia-skeleton</Title>
      <Paragraph>
        <Link href="https://www.npmjs.com/package/react-native-skia-skeleton/">
          react-native-skia-skeleton
        </Link>{' '}
        react-native-skia-skeleton is a
        <Text style={styles.italic}>
          high-performance, fully customizable, and smoothly animated skeleton
          loader
        </Text>{' '}
        built with{' '}
        <Link href="https://shopify.github.io/react-native-skia/">
          React Native Skia
        </Link>{' '}
        and{' '}
        <Link href={'https://docs.swmansion.com/react-native-reanimated/'}>
          React Native Reanimated
        </Link>
        . It enables you to display elegant and visually appealing placeholders,
        enhancing the user experience while your mobile or web app content
        loads.
      </Paragraph>
      <SkeletonCardExample
        isActive={loading}
        onValueChange={(value) => setLoading(value)}
      >
        <CardFullLayoutSkeleton loading={loading} />
      </SkeletonCardExample>
      <Paragraph>
        Designed to help you build visually engaging apps, it supports shimmer
        effects, RTL layout, customizable shapes and seamless animation
        transitions. Below you can find some other examples in a video, that you
        can also find in the examples section of this doc.
      </Paragraph>
      <Image
        resizeMode="contain"
        source={require('../../assets/video-documentation.gif')}
        style={styles.image}
      />
      <Paragraph>Main features of the library include:</Paragraph>
      <FlatList
        scrollEnabled={false}
        data={[
          'High performances thanks to React Native Skia and React Native Reanimated',
          'Full support for Android, iOS, and Web',
          'RTL compatible and easily themeable',
          'Zero dependencies outside of Skia and Reanimated',
        ]}
        renderItem={(info) => <ListItem text={info.item} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  italic: {
    fontStyle: 'italic',
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 16 / 9,
  },
});
