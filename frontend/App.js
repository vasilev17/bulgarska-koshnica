import { StyleSheet, Text } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import { useFonts } from "expo-font";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <SignUpScreen />;
}

const styles = StyleSheet.create({});
