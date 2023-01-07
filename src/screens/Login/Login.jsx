import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useKeyboardVisible } from "../../utils/useKeyboardVisible";
import CustomText from "../../components/common/CustomText";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const keyboardStatus = useKeyboardVisible();
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between p-4 pb-0">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="settings" size={20} />
        </TouchableOpacity>
      </View>
      <View
        className={`items-center flex-1 space-y-6 p-4 ${
          keyboardStatus ? "justify-start mt-9" : "justify-center"
        }`}
      >
        <Image
          source={require("../../assets/icon.jpg")}
          resizeMode="contain"
          className="h-44 w-60"
        />
        <CustomText textStyle="leading-6 text-left w-full">
          برای ورود و یا ثبت نام در دایموند شماره موبایل خود را وارد نمایید.
        </CustomText>
        <TextInput
          className="w-full p-3 text-right bg-gray-200 rounded-md font-[sansMedium]"
          placeholder="شماره تماس"
          keyboardType="number-pad"
        />
        <TouchableOpacity className="items-center w-full p-3 bg-blue-500 rounded-md font-[sansMedium]">
          <Text className="text-white font-[sansMedium]">ورود به دایموند</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default Login;
