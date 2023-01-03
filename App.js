import { I18nManager, SafeAreaView } from "react-native";
import StackNavigator from "./src/navigators/StackNavigator";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    sansLight: require("./src/assets/Fonts/IRANSansXLight.ttf"),
    sansBold: require("./src/assets/Fonts/IRANSansXBold.ttf"),
    sansMedium: require("./src/assets/Fonts/IRANSansXMedium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StackNavigator onLayoutRootView={onLayoutRootView} />
    </SafeAreaView>
  );
}
