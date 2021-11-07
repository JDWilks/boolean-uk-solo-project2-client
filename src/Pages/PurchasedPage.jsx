import React from "react";
import Header from "../Components/Header";
import PurchasedNFT from "../Components/PurchasedNFT";
import Footer from "../Components/Footer";
import "../Styles/MainStyling.css";

function PurchasedButton() {
  return (
    <div className="mainPageWrapper">
      <Header />
      <PurchasedNFT />
      <Footer />
    </div>
  );
}

export default PurchasedButton;
