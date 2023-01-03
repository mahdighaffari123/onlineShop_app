import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useKeyboardVisible } from "../../utils/useKeyboardVisible";
const Login = () => {
  const keyboardStatus = useKeyboardVisible();
  return (
    <View className="flex-1 p-4 bg-white">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity>
          <MaterialCommunityIcons name="close" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="settings" size={20} />
        </TouchableOpacity>
      </View>
      <View
        className={`items-center flex-1 space-y-6 ${
          keyboardStatus ? "justify-start mt-3" : "justify-center"
        }`}
      >
        <Image
          source={require("../../assets/icon.jpg")}
          resizeMode="contain"
          className="h-44 w-60"
        />
        <Text className="leading-6 text-right">
          برای ورود و یا ثبت نام در دایموند شماره موبایل یا پست الکترونیک خود را
          وارد نمایید.
        </Text>
        <TextInput
          className="w-full p-3 text-right bg-gray-200 rounded-md"
          placeholder="شماره تماس یا پست الکترونیک"
        />
        <TouchableOpacity className="items-center w-full p-3 bg-blue-500 rounded-md">
          <Text className="text-white">ورود به دایموند</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
