import React from "react";
import { useStore } from "../Hooks/store";
import { Link } from "react-router-dom";

function Header() {
  const setModal = useStore((store) => store.setModal);

  return (
    <div className="adminHeader">
      <h1>Admin header info goes here</h1>
      <h2>it will have create nft button and link to trade table</h2>
      <button
        onClick={() => {
          console.log("create nft button clicked");
          setModal("CreateNftModal");
        }}
      >
        Create New NFT
      </button>

      <Link to="/trade">
        <button>Take Me To Trade Table</button>
      </Link>
    </div>
  );
}

export default Header;
