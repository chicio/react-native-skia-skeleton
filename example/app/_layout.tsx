import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ActivityIndicator, Button, PaperProvider } from 'react-native-paper';
import { theme } from '../components/theme';
import { FontAwesome } from '@expo/vector-icons';
import { openURL } from 'expo-linking';
import { useMediaQuery } from 'react-responsive';

const title = 'react-native-skia-skeleton';

export default function RootLayout() {
  const [isSkiaReady, setIsSkiaReady] = useState(Platform.OS !== 'web');
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 768,
  });

  useEffect(() => {
    if (Platform.OS === 'web') {
      setTimeout(() => {
        setIsSkiaReady(true);
      }, 3000);
    }
  }, []);

  if (!isSkiaReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              // backgroundColor: '#1e1e2f', // sfondo del drawer
            },
            drawerActiveTintColor: '#ffffff', // colore testo item attivo
            drawerInactiveTintColor: theme.colors.text, // colore testo item inattivo
            drawerActiveBackgroundColor: theme.colors.primary, // sfondo item attivo
            drawerLabelStyle: {
              fontSize: 16,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTintColor: theme.colors.primary, // colore icone e testo
            headerTitleStyle: {
              color: theme.colors.primary, // colore titolo
            },
            swipeEnabled: Platform.OS !== 'web',
            headerRight: () => {
              return Platform.OS === 'web' && !isTabletOrMobileDevice ? (
                <Button
                  icon={({ size, color }) => (
                    <FontAwesome name="github" size={size} color={color} />
                  )}
                  style={{ margin: 8 }}
                  onPress={() =>
                    openURL(
                      'https://github.com/chicio/react-native-skia-skeleton'
                    )
                  }
                  mode="outlined"
                >
                  GitHub
                </Button>
              ) : null;
            },
          }}
          detachInactiveScreens
        >
          <Drawer.Screen
            name="index"
            options={{ drawerLabel: 'Home', title }}
          />
          <Drawer.Screen
            name="usage"
            options={{ drawerLabel: 'Usage', title }}
          />
          <Drawer.Screen
            name="examples"
            options={{ drawerLabel: 'Examples', title }}
          />
          <Drawer.Screen
            name="license"
            options={{ drawerLabel: 'License', title }}
          />
          <Drawer.Screen
            name="credits"
            options={{ drawerLabel: 'Credits', title }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
