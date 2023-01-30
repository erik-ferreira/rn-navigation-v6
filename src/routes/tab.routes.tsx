import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ScreenA } from "../pages/ScreenA";
import { ScreenB } from "../pages/ScreenB";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          tabBarLabel: "Tela A",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          tabBarLabel: "Tela B",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="new-releases" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
