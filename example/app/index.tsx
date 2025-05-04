import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper';
import { SkeletonExample } from '../components/SkeletonExample';
import { Paragraph } from '../components/Paragraph';
import { Title } from '../components/Title';

export default function HomeScreen() {
  const { colors, fonts } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>react-native-skia-skeleton</Title>
      <Paragraph>
        A performant, customizable and animated skeleton loader built with React
        Native Skia and Reanimated. This library helps you show a beautiful
        placeholder while loading content in your mobile or web app.
      </Paragraph>
      <SkeletonExample
        bones={[{ style: { width: 300, height: 100, borderRadius: 8 } }]}
      >
        <View
          style={{
            width: 300,
            height: 100,
            borderRadius: 8,
            backgroundColor: colors.inversePrimary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', ...fonts.titleMedium }}>
            Try it out!
          </Text>
        </View>
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
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 16 / 9,
        }}
      />
      <Paragraph>Main features of the library include:</Paragraph>
      <FlatList
        scrollEnabled={false}
        data={[
          'High performances thanks to react native skia and react native reanimated',
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: Platform.OS !== 'web' ? Dimensions.get('screen').width : undefined,
    maxWidth: 900,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  tryItOut: {
  }
});
