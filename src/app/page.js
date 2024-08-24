import Image from "next/image";
import Footer from "./components/footer";
import Nav from "./components/navbar";
import HomePage from "./components/HomeLayout";

export default function Home() {
  return (
    <>
    <Nav/>
    <main className="min-h-screen">
      <HomePage />

    </main>
    <Footer />
    </>
  );
}
