import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account/Account";
import Categories from "../screens/Categories/Categories";
import Home from "../screens/Home/Home";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Courses") {
            iconName = focused ? "school" : "school";
          } else if (route.name === "MyCourses") {
            iconName = focused ? "message-video" : "message-video";
          } else if (route.name === "Account") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarStyle: {
          backgroundColor: "#333533",
          height: 70,
        },
        tabBarItemStyle: {
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 10,
        },
        tabBarLabelStyle: { paddingBottom: 5 },
        tabBarInactiveTintColor: "#eeeeee68",
        tabBarActiveTintColor: "#fff",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: "اکانت کاربری" }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "اکانت کاربری" }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{ tabBarLabel: "اکانت کاربری" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
