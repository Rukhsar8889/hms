import Image from "next/image";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Banner from "./components/Home/Banner";
import Hotels from "./components/Home/hotels";
import Offers from "./components/Home/offers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <Banner />
      <Hotels />
      <Offers />

      <main className="grow w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center justify-center">
      </main>

      <Footer />
    </div>
  );
}
