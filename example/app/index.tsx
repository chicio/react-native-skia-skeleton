import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper';
import { SkeletonExample } from '../components/SkeletonExample';
import { Paragraph } from '../components/Paragraph';
import { Title } from '../components/Title';
import { Link } from '../components/Link';
import { useState } from 'react';
import { RectangleExample } from '../components/RectangleExample';
import { Container } from '../components/Container';

export default function HomeScreen() {
  const { fonts } = useTheme();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Title>react-native-skia-skeleton</Title>
      <Paragraph>
        A{' '}
        <Text style={styles.italic}>
          performant, customizable and animated skeleton loader
        </Text>{' '}
        built with{' '}
        <Link href="https://shopify.github.io/react-native-skia/">
          React Native Skia
        </Link>{' '}
        and{' '}
        <Link href={'https://docs.swmansion.com/react-native-reanimated/'}>
          React Native Reanimated
        </Link>
        . This library helps you show a beautiful placeholder while loading
        content in your mobile or web app.
      </Paragraph>
      <SkeletonExample
        exampleIdentifier={'homeExample'}
        loading={loading}
        onValueChange={(_, value) => setLoading(value)}
        bones={[{ style: { width: 300, height: 100, borderRadius: 8 } }]}
      >
        <RectangleExample>
          <Text style={{ color: 'white', ...fonts.titleMedium }}>
            Try it out!
          </Text>
        </RectangleExample>
      </SkeletonExample>
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
        renderItem={(info) => (
          <View style={styles.item}>
            <Icon size={8} source={'circle'} />
            <Text variant={'bodyLarge'}>{info.item}</Text>
          </View>
        )}
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
