import Navbar from "./components/navbar";
import Filter from "./components/Filter";
import Seller from "./components/Seller";
import PopularPhotographers from "./components/popularphotographer";
import Footer from "./components/footer";
import TrendingDesigners from "./components/trendingdesigners";
import ClientProfile from "./components/clientprofile";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Filter />
    <Seller />
    <PopularPhotographers />
    <TrendingDesigners />
    <Footer />
    </>
  );
}
