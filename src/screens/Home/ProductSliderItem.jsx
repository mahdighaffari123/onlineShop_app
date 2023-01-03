import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductSliderItem = ({ index }) => {
  return (
    <TouchableOpacity className="items-center justify-center p-2 ml-2 bg-gray-300 ">
      <View className="bg-gray-500 w-[130px] h-[130px] items-center justify-center">
        <Text>image</Text>
      </View>
      <View className="w-full">
        <Text className="text-[12px] font-bold mt-1 text-left">
          Product Name
        </Text>
        <Text className="text-[10px] mt-1 text-left">Product Description</Text>
      </View>
      <View className="flex-row items-center justify-between w-[130px] mt-4">
        <Text>12,000 تومان</Text>
        <TouchableOpacity className="p-[0.5] rounded-sm bg-gray-500">
          <MaterialCommunityIcons name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductSliderItem;
