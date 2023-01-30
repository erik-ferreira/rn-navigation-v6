import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ScreenA } from "../pages/ScreenA";
import { ScreenB } from "../pages/ScreenB";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={24} />,
        }}
      />
      <Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          title: "Cadastro",
          drawerIcon: () => <MaterialIcons name="add" size={24} />,
        }}
      />
    </Navigator>
  );
}
