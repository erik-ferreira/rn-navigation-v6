import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ScreenA() {
  const navigation = useNavigation();

  function handleOpenScreenB() {
    navigation.navigate("ScreenB", { name: "Erik" });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#CDF",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Button title="Ir para tela B" onPress={handleOpenScreenB} />
    </View>
  );
}
