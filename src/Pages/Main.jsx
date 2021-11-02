import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import "../Styles/MainStyling.css";

// this is the main page users reach which has 3 components rendered (header / body / footer)

function Main({ allNfts }) {
  return (
    <div className="mainPageWrapper">
      <Header />
      <Body allNfts={allNfts} />
      <Footer />
    </div>
  );
}

export default Main;
