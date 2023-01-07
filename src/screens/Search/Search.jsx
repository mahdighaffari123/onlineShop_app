import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View className="shadow-lg shadow-[#00000010] bg-white h-full">
      <View className="flex-row items-center p-2 mx-2 my-2 space-x-2 bg-gray-200 border border-gray-600 rounded-lg">
        <MaterialCommunityIcons
          name="arrow-right"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          placeholder="جستجو در دایموند"
          className="font-[sansMedium] w-[90%]"
          autoFocus
        />
      </View>
    </View>
  );
};

export default Search;
