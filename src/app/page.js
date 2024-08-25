import Navbar from "./components/navbar";
import Filter from "./components/Filter";
import Seller from "./components/seller";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Filter />
    <Seller />
    <Footer />
    </>
  );
}
