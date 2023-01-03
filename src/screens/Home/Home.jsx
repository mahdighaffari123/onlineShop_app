import { ScrollView } from "react-native";
import CatItems from "./CatItems";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";
import Story from "./Story";
const Home = () => {
  return (
    <ScrollView>
      <Story />
      <Slider />
      <CatItems />
      <ProductSlider />
      <ProductSlider />
    </ScrollView>
  );
};

export default Home;
