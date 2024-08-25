import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Seller from "./components/Seller";
import PopularPhotographers from "./components/popularphotographer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Filter />
    <Seller />
    <PopularPhotographers />
    <Footer />
    </>
  );
}
