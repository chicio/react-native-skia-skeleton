import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ActivityIndicator } from 'react-native-paper';

export default function RootLayout() {
  const [isSkiaReady, setIsSkiaReady] = useState(Platform.OS !== 'web');

  useEffect(() => {
    if (Platform.OS === 'web') {
      setInterval(() => {
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          swipeEnabled: Platform.OS !== 'web',
        }}
        detachInactiveScreens
      >
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: 'Home', title: 'overview' }}
        />
        <Drawer.Screen
          name="misc"
          options={{ drawerLabel: 'Miscellaneus', title: 'miscellaneus' }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
