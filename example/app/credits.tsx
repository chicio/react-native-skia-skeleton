import { Linking, ScrollView, View } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function CreditsScreen() {
  const openURL = (url: string) => Linking.openURL(url);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        maxWidth: 900,
        alignSelf: 'center',
      }}
    >
      <Title style={{ marginBottom: 12 }}>About the Author</Title>
      <Text style={{ marginBottom: 12 }}>
        Hi! I'm Fabrizio Duroni, the creator and maintainer of
        react-native-skia-skeleton. I'm a passionate mobile developer with a
        strong interest in cross-platform technologies and creative UI/UX
        solutions.
      </Text>
      <Text style={{ marginBottom: 12 }}>
        You can find more about me and my work on my personal website:
      </Text>
      <Button
        icon="web"
        mode="contained"
        style={{ marginBottom: 16 }}
        onPress={() => openURL('https://www.fabrizioduroni.it')}
      >
        Visit fabrizioDuroni.it
      </Button>

      <Text style={{ marginBottom: 8 }}>Follow me on social media:</Text>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button
          icon={({ size, color }) => (
            <FontAwesome name="github" size={size} color={color} />
          )}
          onPress={() => openURL('https://github.com/chicio')}
          mode="outlined"
        >
          GitHub
        </Button>
        <Button
          icon={({ size, color }) => (
            <FontAwesome name="linkedin" size={size} color={color} />
          )}
          onPress={() => openURL('https://www.linkedin.com/in/fabrizioduroni/')}
          mode="outlined"
        >
          LinkedIn
        </Button>
        <Button
          icon={({ size, color }) => (
            <FontAwesome name="twitter" size={size} color={color} />
          )}
          onPress={() => openURL('https://twitter.com/chicio86')}
          mode="outlined"
        >
          Twitter
        </Button>
      </View>
    </ScrollView>
  );
}
