import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import type * as React from 'react';

const homeTabIcon: (props: { color: string }) => React.ReactNode = ({
  color,
}) => <FontAwesome size={28} name="home" color={color} />;

const misc: (props: { color: string }) => React.ReactNode = ({ color }) => (
  <FontAwesome size={28} name="cog" color={color} />
);

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cards',
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tabs.Screen
        name="misc"
        options={{
          title: 'Misc',
          tabBarIcon: misc,
        }}
      />
    </Tabs>
  );
}
