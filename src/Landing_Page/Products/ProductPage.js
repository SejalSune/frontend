import React from "react";
import Navbar from "../Navbar";
import Techno from "./Technology";
import Left from "./LeftCompo";
import Right from "./RightCompo";
import Maincard from "./Maincard";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Navbar />
      <Techno />
      <Left
        photo="images\kite.png"
        para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        heading="Kite"
      />
      <Right
        photo="images\console.png"
        para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        heading="Console"
      />
      <Left
        photo="images\coin.png"
        para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        heading="Coin"
      />
      <Right
        photo="images\kiteconnect.png"
        para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        heading="Kite Connect API"
      />
      <Left
        photo="images\varsity.png"
        para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        heading="Varsity mobile"
      />
      <Maincard/>
      <Footer/>
    </>
  );
}

export default ProductPage;
