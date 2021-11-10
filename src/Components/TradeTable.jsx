import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/TableStyling.css";

function TradeTable() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/trade`, {
      // Adding headers to the request
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("trade data >", data);
      });
  }, []);

  return (
    <div className="tableContainer">
      <h3 className="tableHeader">Table of purchases</h3>
      <table className="table">
        <tr className="tradeTableFields">
          <th>Nft Name</th>
          <th>NFT ID</th>
          <th>Purchaser name</th>
          <th>Purchaser Email</th>
          <th>Purchase Price</th>
        </tr>

        <tr className="tradeTableFields">
          <td>Stupid pengiun</td>
          <td>983645</td>
          <td>jonathon</td>
          <td>jonathondwilks@icloud.com</td>
          <td>99</td>
        </tr>

        <tr className="tradeTableFields">
          <td>Stupid squirrel</td>
          <td>883646</td>
          <td>bob</td>
          <td>bob@bob.com</td>
          <td>999</td>
        </tr>

        <tr>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalPrice">Total Etherium: total price</td>
        </tr>
      </table>
      <Link to="/admin">
        <p className="backHomeTrade">Back to Admin Page</p>
      </Link>
    </div>
  );
}

export default TradeTable;
