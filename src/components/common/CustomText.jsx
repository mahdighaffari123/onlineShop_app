import { Text } from "react-native";

const CustomText = ({ textStyle, children }) => {
  return <Text className={`font-[sansMedium] ${textStyle}`}>{children}</Text>;
};

export default CustomText;
