import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CatItems = () => {
  const data = [...new Array(8).keys()];
  return (
    <View className="flex-row flex-wrap justify-center gap-y-2 gap-x-2">
      {data?.map((index) => (
        <TouchableOpacity className="w-[22%] items-center bg-gray-300 h-[80px] justify-center rounded-md">
          <Text>{index}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CatItems;
