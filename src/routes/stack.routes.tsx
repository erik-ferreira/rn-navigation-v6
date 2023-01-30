import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenA } from "../pages/ScreenA";
import { ScreenB } from "../pages/ScreenB";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="ScreenA"
        component={ScreenA}
        options={{ headerShown: false }}
      />
      <Screen
        name="ScreenB"
        component={ScreenB}
        options={{ title: "Tela B" }}
      />
    </Navigator>
  );
}
