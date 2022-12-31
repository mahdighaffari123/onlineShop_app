import { SafeAreaView } from "react-native";
import StackNavigator from "./src/navigators/StackNavigator";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";
export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StackNavigator />
    </SafeAreaView>
  );
}
