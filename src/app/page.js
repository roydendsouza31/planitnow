import Navbar from "./components/navbar";
import Filter from "./components/Filter";
import Seller from "./components/Seller";
import Footer from "./components/footer";
import PopularPhotographers from "./components/popularphotographer";

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
