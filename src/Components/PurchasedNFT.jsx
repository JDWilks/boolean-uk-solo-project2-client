import React from "react";
import { useStore } from "../Hooks/store";
import "../Styles/PurchasedNftStyling.css";

function PurchasedNFT() {
  const currentNft = useStore((store) => store.currentNft);
  const currentUser = useStore((store) => store.currentUser);

  return (
    <div className="purcahseContrainer">
      <h1 className="purchaseCopy">
        Thanks you {currentUser.firstName} you have just purchased the below
        NFT.
      </h1>
      <h2 className="purchaseCopy2">
        You are now the owner of a smart contract on the Ethereum blockchain
        linked to your wallet address.
      </h2>
      <h5 className="purchaseCopy3">
        Click the JDW-Collect (top-left) to return to the main page
      </h5>

      {/* this div hold all the current nft info */}
      <div className="purchasedArtInfo">
        <img
          className="nftImageLarge"
          src={currentNft.url}
          alt={currentNft.name}
        />
        <h1 className="purchasedNftArtCopy">Title: {currentNft.name}</h1>
        <h1 className="purchasedNftArtCopy">
          Price(Etherium): {currentNft.price}
        </h1>
        <h1 className="purchasedNftArtCopy">
          Description: {currentNft.description}
        </h1>
      </div>
    </div>
  );
}

export default PurchasedNFT;
