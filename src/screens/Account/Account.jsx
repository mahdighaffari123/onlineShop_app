import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const Account = () => {
  const navigate = useNavigation();
  return (
    <View onTouchStart={() => navigate.navigate("Login")} className="flex-1">
      <Text>Account</Text>
    </View>
  );
};

export default Account;
