import { View, Text } from "react-native";
import React from "react";

const ProductSliderItem = ({ index }) => {
  return (
    <View className="items-center justify-center p-2 mr-2 bg-gray-300 ">
      <View className="bg-gray-500 w-[130px] h-[130px] items-center justify-center">
        <Text>image</Text>
      </View>
      <View className="w-full">
        <Text className="text-[12px] font-bold mt-1">Product Name</Text>
        <Text className="text-[10px] mt-1">Product Description</Text>
      </View>
    </View>
  );
};

export default ProductSliderItem;
