import Filter from "./components/filter";
import Seller from "./components/seller";
import PopularPhotographers from "./components/popularPhotographers";
import TrendingDesigners from "./components/trendingDesigners";


export default function Home() {
  return (
    <>
   
    <Filter />
    <Seller />
    <PopularPhotographers />
    <TrendingDesigners />
    </>
  );
}
