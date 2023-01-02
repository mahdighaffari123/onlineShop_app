import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Slider = () => {
  const width = Dimensions.get("window").width;

  return (
    <GestureHandlerRootView>
      <Carousel
        loop
        snapEnabled
        width={width}
        height={width / 2}
        mode="parallax"
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={500}
        autoPlayReverse
        renderItem={({ index }) => (
          <View className="items-center justify-center flex-1 bg-gray-300 rounded-lg">
            <Text className="text-[30px]">{index}</Text>
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
};

export default Slider;
