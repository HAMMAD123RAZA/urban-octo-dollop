import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,

          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={32} name={focused ? 'home' : 'home-outline'} color={Colors.primary} />
          ),
        }}
      />

<Tabs.Screen
        name="Profile"
        options={{
          headerShown:false,

          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={32} name='people' color={Colors.primary} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={32} name='search' color={Colors.primary} />
          ),
        }}
      />

    </Tabs>
  );
}
