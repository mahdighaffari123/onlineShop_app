import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={LoginScreen} name="login" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
