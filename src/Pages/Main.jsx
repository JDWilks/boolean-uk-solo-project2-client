import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import "../Styles/MainStyling.css";

function main() {
  return (
    <div className="mainPageWrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default main;
