import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../../components/common/CustomText";
const Search = () => {
  const navigation = useNavigation();
  return (
    <View
      className="shadow-lg shadow-[#00000010] bg-white"
      onTouchStart={() => navigation.navigate("Search")}
    >
      <View className="flex-row items-center p-2 mx-2 my-2 bg-gray-200 rounded-t-lg">
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
        <CustomText textStyle="mx-3 text-[12px]">جستجو در دایموند</CustomText>
      </View>
    </View>
  );
};

export default Search;
