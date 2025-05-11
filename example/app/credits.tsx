import { Linking, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { Button } from 'react-native-paper';

export default function CreditsScreen() {
  const openURL = (url: string) => Linking.openURL(url);

  return (
    <Container>
      <Title>About the Author</Title>
      <Paragraph>
        Hi! I'm Fabrizio Duroni, the creator and maintainer of
        react-native-skia-skeleton. I’m Fabrizio Duroni, a software developer
        with over 15 years of experience, working in the field since 2008. I
        specialise in developing mobile 📱 and web applications 💻. I also
        maintain small open-source projects and I have a blog where I speak
        about technology.
      </Paragraph>
      <Paragraph>
        You can find more about me and my work on my personal website:
      </Paragraph>
      <Button
        icon="web"
        mode="contained"
        style={{ marginBottom: 16 }}
        onPress={() => openURL('https://www.fabrizioduroni.it')}
      >
        Visit fabrizioduroni.it
      </Button>

      <Paragraph>Follow me on social media:</Paragraph>
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
    </Container>
  );
}
