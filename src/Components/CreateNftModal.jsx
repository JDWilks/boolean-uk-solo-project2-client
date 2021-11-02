import React, { useState } from "react";
import "../Styles/CreateNftModalStyling.css";
import { useStore } from "../Hooks/store";

export default function CreateNftModal() {
  const setModal = useStore((store) => store.setModal);
  // const [allNfts, setAllNfts] = useState([]);

  // zustand ztate to replace the above local state

  const setAllNfts = useStore((store) => store.setAllNfts);

  const [artWorkName, setArtWorkName] = useState("");
  const [artWorkPrice, setArtWorkPrice] = useState("");
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artWorkUrl, setArtWorkUrl] = useState("");

  // create nft function sending info to the backend
  function createNft() {
    fetch("http://localhost:3030/nftArt", {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send (firstName and lastName are taken directly from state)
      body: JSON.stringify({
        name: artWorkName,
        price: artWorkPrice,
        description: artWorkDescription,
        url: artWorkUrl,
      }),
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((newNft) => console.log("newNft >>>", newNft)) //save in state or whatever is newUser
      // .then((json) => console.log(json))
      .catch((error) => console.log("Frontend error", error));
  }

  function getAllNfts() {
    fetch("http://localhost:3030/nftArt")
      .then((res) => res.json())
      .then((fetchedNfts) => setAllNfts(fetchedNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  // handle submit triggered on submitting the form
  // it creates the new nft
  // it should then gett all nft's rendering the page which is not happening
  // it then closes the modal
  function handleSubmit(e) {
    e.preventDefault();
    createNft();
    getAllNfts();
    setModal("");
  }

  return (
    <div className="modal-bg">
      <form className="createModal" onSubmit={handleSubmit}>
        <label className="createNftModalCopy" htmlFor="name">
          Name:
        </label>
        {/* inputs are prepopulated with the artwork name  */}
        <input
          type="text"
          id="name"
          name="name"
          value={artWorkName}
          onChange={(e) => setArtWorkName(e.target.value)}
        />

        <label className="createNftModalCopy" htmlFor="price">
          Price:
        </label>

        <input
          type="text"
          id="price"
          name="price"
          value={artWorkPrice}
          onChange={(e) => setArtWorkPrice(e.target.value)}
        />

        <label className="createNftModalCopy" htmlFor="description">
          Decription:
        </label>

        <input
          type="text"
          id="description"
          name="description"
          value={artWorkDescription}
          onChange={(e) => setArtWorkDescription(e.target.value)}
        />

        <label className="createNftModalCopy" htmlFor="url">
          Artwork Url:
        </label>

        <input
          type="text"
          id="url"
          name="url"
          value={artWorkUrl}
          onChange={(e) => setArtWorkUrl(e.target.value)}
        />

        <input type="submit" value="Submit" />

        <span
          className="modalClose"
          onClick={() => {
            setModal("");
          }}
        >
          ❎
        </span>
      </form>
    </div>
  );
}
