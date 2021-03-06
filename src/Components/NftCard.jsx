import React from "react";
import "../Styles/nftCardStyling.css";
import { useStore } from "../Hooks/store";

//card component receives the props so can use them from body.jsx
export default function NftCards({ id, name, price, description, url }) {
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);
  // using zustand tate to store nft info for use in the modal
  const setNft = useStore((store) => store.setCurrentNft);
  // using zustand state to store the current user
  const currentUser = useStore((store) => store.currentUser);
  // console.log("id of the nftfs...", id);

  return (
    <article className="allnfts">
      {/* on clicking a nft card that info is stored in zustand state (setNft) to use with all the nft info for that card which is brought up in a modal  */}
      <div
        className="nftCard"
        onClick={() => {
          setNft({
            id,
            description,
            name,
            price,
            url,
          });
          console.log("current user", currentUser);
          currentUser.role === "admin"
            ? setModal("AdminNftModal")
            : setModal("NftModal");
        }}
      >
        <img className="nftImage" src={url} alt={name} />
        <h2 className="nftTitle">Title: {name}</h2>
        <h3 className="nftPrice">Price (Etherium): {price}</h3>
        <h3 className="nftPrice">Description : {description}</h3>

        <button
          className="buyButton"
          onClick={() => {
            console.log("buy button clicked test");
            setModal("NftModal");
          }}
        >
          BUY
        </button>
      </div>
    </article>
  );
}
