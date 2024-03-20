import { StyleSheet, Text } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import UserTypeScreen from "./screens/UserTypeScreen";
import UserInfoScreen from "./screens/UserInfoScreen";
import BusinessInfoScreen from "./screens/BusinessInfoScreen";
import ChooseLocationScreen from "./screens/ChooseLocationScreen";
import BusinessDescriptionScreen from "./screens/BusinessDescriptionScreen";
import BusinessCategoryScreen from "./screens/BusinessCategoryScreen";
import BusinessHoursScreen from "./screens/BusinessHoursScreen";

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
      <BusinessHoursScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
