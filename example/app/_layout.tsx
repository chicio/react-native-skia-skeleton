import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ActivityIndicator, PaperProvider } from 'react-native-paper';
import { theme } from '../components/theme';

const title = 'react-native-skia-skeleton';

export default function RootLayout() {
  const [isSkiaReady, setIsSkiaReady] = useState(Platform.OS !== 'web');

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
            swipeEnabled: Platform.OS !== 'web',
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
