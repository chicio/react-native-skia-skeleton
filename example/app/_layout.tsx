import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  const [isSkiaReady, setIsSkiaReady] = useState(Platform.OS !== 'web');

  useEffect(() => {
    if (Platform.OS === 'web') {
      setInterval(() => {
        setIsSkiaReady(true);
      }, 100);
    }
  }, []);

  if (!isSkiaReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
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
