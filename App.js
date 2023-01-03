import { I18nManager, SafeAreaView } from "react-native";
import StackNavigator from "./src/navigators/StackNavigator";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StackNavigator />
    </SafeAreaView>
  );
}
