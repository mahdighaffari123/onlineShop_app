import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import Login from "../screens/Login/Login";
import Search from "../screens/Search/Search";

const StackNavigator = ({ onLayoutRootView }) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ animation: "fade_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
