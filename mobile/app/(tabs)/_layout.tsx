import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
       <Tabs.Screen
        name="pixels"
        options={{
          title: 'Pixels',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="pac-man" size={24} color="yellow" />
        }}
      />
      <Tabs.Screen
        name="ouija"
        options={{
          title: 'Ouija',
          tabBarIcon: ({ color }) => <FontAwesome6 name="chess-board" size={24} color="red" />
        }}
      />
      <Tabs.Screen
        name="freeguy"
        options={{
          title: 'freeguy',
          tabBarIcon: ({ color }) => <AntDesign name="aim" size={24} color="blue" />
        }}
      />
      <Tabs.Screen
        name="coraline"
        options={{
          title: 'coraline',
          tabBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={24} color="purple" />
        }}
      />
       <Tabs.Screen
        name="noivacadaver"
        options={{
          title: 'noivacadaver',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bottle-tonic-skull-outline" size={24} color="gray" />
        }}
      />
        <Tabs.Screen
        name="gabinetecaligari"
        options={{
          title: 'gabinetecaligari',
          tabBarIcon: ({ color }) => <FontAwesome5 name="cross" size={24} color="brown" />
        }}
      />
    </Tabs>
  );
}
