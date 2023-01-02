import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account/Account";
import Categories from "../screens/Categories/Categories";
import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import Bookmark from "../screens/Bookmark/Bookmark";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "menu-open" : "menu";
          } else if (route.name === "Account") {
            iconName = focused ? "account-box" : "account-box-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },

        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 70,
        },
        tabBarItemStyle: {
          marginHorizontal: 10,
          marginVertical: 10,
        },
        tabBarLabelStyle: { paddingBottom: 5 },
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#0068c9",
        // headerShown: Platform.OS === "ios" ? true : false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: "اکانت کاربری" }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{ tabBarLabel: "دسته بندی" }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "خانه" }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarLabel: "سبد خرید" }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ tabBarLabel: "علاقه مندی ها" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
