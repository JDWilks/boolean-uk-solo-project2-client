import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";
import "../Styles/nftModalStyling.css";

function NftModal() {
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);
  // using zustand to store / retrieve current nft info for display in modal
  const currentNft = useStore((store) => store.currentNft);
  const currentUser = useStore((store) => store.currentUser);
  // local state
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [email, setEmail] = useState(currentUser.email);
  // assigning a variable to useHistory
  const history = useHistory();

  console.log("current user is", currentUser);

  //sending info to the trade table in the backend so i can use it in the trade table (admin) in the front end

  function createTrade() {
    fetch(`${process.env.REACT_APP_API}/trade`, {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      // Adding body or contents to send to backend (taken directly from zustand state)
      body: JSON.stringify({
        userId: currentUser.id,
        nftId: currentNft.id,
        purchasePrice: currentNft.price,
      }),
    })
      .then((res) => res.json())
      .then((newTrade) => {
        console.log("newTrade", newTrade);
        // use history to go to confirmation page
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  // on submitting form fetch is triggered in the handlesubmit sending the sale info to the backend

  function handleSubmit() {
    // e.preventDefault();
    createTrade();
    setModal("");
    history.push("/purchased");
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

          <div className="purchaseCheckButton">
            {!currentUser.firstName ? (
              <Link
                className="purchaseCheckButton"
                to="/login"
                onClick={() => {
                  setModal("");
                }}
              >
                Please login to purchase NFT's
              </Link>
            ) : (
              <button className="purchaseNowButton" onClick={handleSubmit}>
                Purchase Now
              </button>
            )}
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

<Link className="purchaseCheckButton" to="/login">
  Please login to purchase NFT's
</Link>;
