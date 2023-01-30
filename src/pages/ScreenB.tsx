import { View, Text } from "react-native";
import { Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

interface RouteProps {
  name: string;
}

export function ScreenB() {
  const navigation = useNavigation();

  const route = useRoute();
  const { name } = route?.params as RouteProps;

  return (
    <View style={{ flex: 1, backgroundColor: "#CFD" }}>
      <Text>ScreenB - {name || "Sem nome"}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
