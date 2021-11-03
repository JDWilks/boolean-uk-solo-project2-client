import React from "react";
import TradeTable from "../Components/TradeTable";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function trade() {
  return (
    <div className="mainPageWrapper">
      <Header />
      <TradeTable />
      <Footer />
    </div>
  );
}

export default trade;
