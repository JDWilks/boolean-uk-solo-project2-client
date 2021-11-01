import React, { useEffect, useState } from "react";
import { useStore } from "../Hooks/store";

import "../Styles/nftModalStyling.css";

function NftModal() {
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);
  // using zustand to store / retrieve current nft info for display in modal
  const currentNft = useStore((store) => store.currentNft);
  const currentUser = useStore((store) => store.currentUser);

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [email, setEmail] = useState(currentUser.email);

  console.log("current user is", currentUser);

  //sending info to the trade table in the backend so i can use it in the trade table (admin) in the front end

  function createTrade() {
    fetch("http://localhost:3030/trade", {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send to backend (taken directly from zustand state)
      body: JSON.stringify({
        userId: currentUser.id,
        nftId: currentNft.nftUuId,
        purchasePrice: currentNft.price,
        type: "BUY",
      }),
    })
      .then((res) => res.json())

      .catch((error) => console.error("FETCH ERROR:", error));
  }

  // on submitting form fetch is triggered in the handlesubmit sending the sale info to the backend

  function handleSubmit() {
    // e.preventDefault();
    createTrade();
    setModal("");
    console.log("handle submit");
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
        <div className="buyInfo">
          <h5 className="namefieldloginBuy__modal">First Name</h5>
          <input
            className="buyInput"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
          />
          <h5 className="lastNamefieldloginBuy__modal">Last Name</h5>
          <input
            className="buyInput"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
          />
          <h5 className="emailfieldloginBuy__modal">Email</h5>
          <input
            className="buyInput"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />

          <p className="youAreSendingCopy">
            You are sending {currentNft.price} etherium to this etherium
            address:
          </p>
          <p className="etheriumAddress">
            0xc0ffee254729296a45a3885639AC7E10F9d54979
          </p>
          <p className="checkYourInfoCopy">
            Please check the above is correct....
          </p>
          <p className="checkYourInfoCopy2">
            ...this is the blockchain & you are your own bank!
          </p>

          {/* purchase button needs to only shows when logged in otherwise prompted to login */}
          <div>
            <button className="purchaseNowButton" onClick={handleSubmit}>
              Purchase Now
            </button>
          </div>
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
