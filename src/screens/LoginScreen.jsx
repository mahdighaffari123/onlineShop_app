import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

const LoginScreen = () => {
  return (
    <View className="bg-[#111111] h-full">
      <View className="w-[80%] mx-auto h-full">
        <Text className="font-extrabold mx-auto mt-10 text-xl text-white">
          Sign in to TED
        </Text>
        <Text className="text-white text-center mx-auto mt-[20px]">
          Get a personalized TED experience across all yout devices, from Web to
          apps to TV
        </Text>

        <Text className="text-[#a1a1a1] mx-auto mt-14">Email address</Text>
        <TextInput
          className={`bg-[#413d3d] mt-2 rounded-sm text-white ${
            Platform.OS === "android" ? "p-2" : "p-3"
          } px-4`}
          keyboardType="email-address"
        />
        <TouchableOpacity className="mt-5 bg-[#2fc4df] p-2.5 rounded-sm">
          <Text className="text-white mx-auto font-semibold">Continue</Text>
        </TouchableOpacity>
        <Text className="text-white absolute bottom-16 text-center font-light w-full">
          By signing into or createing a TED account, you agree to our{" "}
          <Text className="font-bold">Terms of Use</Text> and{" "}
          <Text className="font-bold">Privacy Policy</Text>.
        </Text>
        <TouchableOpacity className="absolute bottom-3 w-full">
          <Text className="text-white font-light text-[12px] mx-auto">
            Skip this for now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
