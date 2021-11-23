import React from "react";
import { useStore } from "../Hooks/store";
import "../Styles/AdminNftModalStyling.css";
import AdminAmendForm from "../Components/AdminAmendForm";

function NftModal() {
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);
  // using zustand to store / retrieve current nft info for display in modal
  const currentNft = useStore((store) => store.currentNft);
  const allNfts = useStore((store) => store.allNfts);
  const setAllNfts = useStore((store) => store.setAllNfts);

  function deleteOneNft() {
    fetch(`${process.env.REACT_APP_API}/nftArt/${currentNft.id}`, {
      method: "DELETE",
    })
      // Converting to JSON
      .then((response) => response.json())
      // need to filter here to remove the nft from all nfts to setallnfts which re-renders page
      .then((deletedNft) => {
        // filter creates a new array
        // created a variable updatedWithoutDeletedNftArray which is a filter function
        // it filters through allNfts and for every nft if checks if deleted Nft.id is the same a a nft.id within the array
        // then use a ternary to return a array without the deleted nft
        // then setAllnfts (which re-renders page) with the new array
        console.log("deletedNft...", deletedNft);
        console.log("deletedNft id...", deletedNft.id);
        const updatedWithoutDeletedNftArray = allNfts.filter(
          (nft) => deletedNft.id !== nft.id
        );
        setAllNfts(updatedWithoutDeletedNftArray);
      })
      // .then((json) => console.log(json))
      .catch((error) => error);
  }

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
          <div className="adminAmendSection">
            <p className="adminAmendCopy">Amend This NFT</p>
            <AdminAmendForm />
          </div>
          <div className="adminDeleteSection">
            <p className="adminDeleteCopy">Delete This NFT</p>
            <button
              className="adminDeleteButton"
              onClick={() => {
                deleteOneNft();
                setModal("");
              }}
            >
              Delete This nft
            </button>
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
      </div>
    </article>
  );
}

export default NftModal;
