import "react-native-gesture-handler";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "./shared/constants";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import UserTypeScreen from "./screens/UserTypeScreen";
import UserInfoScreen from "./screens/UserInfoScreen";
import BusinessInfoScreen from "./screens/BusinessInfoScreen";
import ChooseLocationScreen from "./screens/ChooseLocationScreen";
import BusinessDescriptionScreen from "./screens/BusinessDescriptionScreen";
import BusinessCategoryScreen from "./screens/BusinessCategoryScreen";
import BusinessHoursScreen from "./screens/BusinessHoursScreen";
import DeliveryAndPaymentScreen from "./screens/DeliveryAndPaymentScreen";
import BusinessImageScreen from "./screens/BusinessImageScreen";
import NewProductsScreen from "./screens/NewProductsScreen";
import AddProductScreen from "./screens/AddProductScreen";
import BusinessKeyWordsScreen from "./screens/BusinessKeyWordsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import VerificationCodeScreen from "./screens/VerificationCodeScreen";
import BusinessSuccessScreen from "./screens/BusinessSuccessScreen";
import CustomText from "./shared/components/CustomText";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Italic": require("./assets/fonts/Inter-Italic.otf"),
    "Inter-BoldItalic": require("./assets/fonts/Inter-BoldItalic.otf"),
    "Inter-ThinItalic": require("./assets/fonts/Inter-ThinItalic-BETA.otf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomText style={{ color: COLORS.primary }}>Loading...</CustomText>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BusinessSuccessScreen />
    </GestureHandlerRootView>
  );
}
