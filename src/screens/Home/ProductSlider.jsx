import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductSliderItem from "./ProductSliderItem";

const ProductSlider = () => {
  const data = [...new Array(8).keys()];
  return (
    <View className="mx-2 mt-2">
      <View className="flex-row items-center justify-between">
        <Text className="mb-2 text-lg font-bold">Products</Text>
        <Text className="mb-2">more</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(index) => index}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => <ProductSliderItem index={index} />}
      />
    </View>
  );
};

export default ProductSlider;
