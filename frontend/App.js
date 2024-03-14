import { StyleSheet, Text } from "react-native";
import UserInfoScreen from "./screens/UserInfoScreen";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserInfoScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
