import React from "react";
import Header from "./components/Header";
import Menu from "./components/MenuBar";
import TopBanner from "./components/Slider/TopSlider.js";
import BestDeals from "./components/BestDeals";
import Explore from "./components/Explore";
import Recommanded from "./components/Recommanded";
import StaticBanner from "./components/StaticBanner";
import HotSale from "./components/HotSale";
import Advertise from "./components/StaticBanner/Advertise";
import Recent from "./components/Recent";
import BacktoTop from "./components/Top";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <TopBanner />
      <BestDeals />
      <Explore />
      <Recommanded />
      <StaticBanner />
      <HotSale />
      <Advertise />
      <Recent />
      <BacktoTop />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
