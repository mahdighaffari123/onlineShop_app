import { ScrollView, View } from "react-native";
import CatItems from "./CatItems";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";

const Home = () => {
  return (
    <ScrollView>
      <Slider />
      <CatItems />
      <ProductSlider />
    </ScrollView>
  );
};

export default Home;
