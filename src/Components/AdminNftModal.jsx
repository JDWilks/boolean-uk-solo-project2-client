import React from "react";
import { useStore } from "../Hooks/store";

// import "../Styles/AdminNftModalStyling.css";

function NftModal() {
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);
  // using zustand to store / retrieve current nft info for display in modal
  const currentNft = useStore((store) => store.currentNft);
  return (
    <article className="modal-bg">
      <div className="nftArtModal">
        {/* this div hold all the current nft info */}
        <div className="artInfo">
          <img
            className="nftImageLarge"
            src={currentNft.url}
            alt={currentNft.name}
          />
          <h1 className="nftArtModalCopy">Title: {currentNft.name}</h1>
          <h1 className="nftArtModalCopy">
            Price(Etherium): {currentNft.price}
          </h1>
          <h1 className="nftArtModalCopy">
            Description: {currentNft.description}
          </h1>
        </div>
        {/* this div holds all the right hand side user info fi you are logged in as a client */}
        <div className="adminInfo">
          <h1>
            admin tool - amend appears and changes to delete on clicking buttons
          </h1>
        </div>
        {/* this div holds all the admin buttons - sort out why they sit below modal */}
        <div className="adminButtons">
          <button>Amend NFT</button>
          <button>Delete NFT</button>
        </div>
      </div>
      <span
        className="modalClose"
        onClick={() => {
          setModal("");
        }}
      >
        ❎
      </span>

      {/* displays left hand info on the nft - all info taken from state as we set it in the card and we take from zustand */}
    </article>
  );
}

export default NftModal;
