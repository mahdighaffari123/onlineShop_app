import { ScrollView } from "react-native";
import CatItems from "./CatItems";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";
import Story from "./Story";
import SquareBanners from "./SquareBanners";
import Search from "./Search";
const Home = () => {
  return (
    <>
      <Search />
      <ScrollView>
        {/* <Story /> */}
        <Slider />
        <CatItems />
        <ProductSlider />
        <SquareBanners />
        <ProductSlider />
      </ScrollView>
    </>
  );
};

export default Home;
