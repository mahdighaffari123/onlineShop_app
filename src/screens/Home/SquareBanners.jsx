import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../components/common/CustomText";

const SquareBanners = () => {
  const data = [...new Array(4).keys()];

  return (
    <View className="flex-row flex-wrap justify-between pt-4 mx-2 mb-2 gap-y-2">
      {data?.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="w-[49%] bg-gray-200 p-2 items-center rounded-md h-[100px] justify-center"
        >
          <CustomText> banner {index}</CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SquareBanners;
