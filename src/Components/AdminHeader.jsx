import React from "react";
import { useStore } from "../Hooks/store";
import { Link } from "react-router-dom";

import "../Styles/AdminStyling.css";

function Header() {
  const setModal = useStore((store) => store.setModal);

  return (
    <div className="adminHeader">
      <button
        className="createButton"
        onClick={() => {
          console.log("create nft button clicked");
          setModal("CreateNftModal");
        }}
      >
        Create New NFT
      </button>

      <Link to="/trade">
        <button className="takeMeToTradeButton">Take Me To Trade Table</button>
      </Link>

      <p className="adminInfo">Click on a card to ammend or delete</p>
    </div>
  );
}

export default Header;
