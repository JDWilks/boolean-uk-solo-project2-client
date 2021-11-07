import React, { useEffect, useState } from "react";
import { useStore } from "../Hooks/store";
import "../Styles/AdminNftModalStyling.css";

export default function AdminAmendNft() {
  const currentNft = useStore((store) => store.currentNft);
  const allNfts = useStore((store) => store.allNfts);
  const setAllNfts = useStore((store) => store.setAllNfts);
  const setModal = useStore((store) => store.setModal);
  const [artWorkName, setArtWorkName] = useState("");
  const [artWorkPrice, setArtWorkPrice] = useState("");
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artWorkUrl, setArtWorkUrl] = useState("");

  console.log("currentNft...", currentNft);

  useEffect(() => {
    setArtWorkUrl(currentNft.url);
    setArtWorkName(currentNft.name);
    setArtWorkDescription(currentNft.description);
    setArtWorkPrice(currentNft.price);
  }, []);

  function amendNft() {
    fetch(`${process.env.REACT_APP_API}/nftArt/${currentNft.id}`, {
      // Adding method type
      method: "PATCH",
      // Adding body or contents to send (artWorkName etc are taken directly from state)
      body: JSON.stringify({
        name: artWorkName,
        price: artWorkPrice,
        description: artWorkDescription,
        url: artWorkUrl,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // below I need to setAllNfts (so page re-renders) with allNfts including ammended one
      .then((amendedNft) => {
        // creating a variable updatedarray which is a map function
        // it maps through allNfts and for every nft it checks if the amended nft id is the same as a nft.id (within allNfts)
        // then use a ternary to return the array with the amended nft
        // then setAllNfts (which re-renders the page) with the new array
        const updatedArray = allNfts.map((nft) =>
          amendedNft.updatedNft.id === nft.id ? amendedNft.updatedNft : nft
        );
        setAllNfts(updatedArray);
      })
      .catch((error) => error);
  }

  function handleSubmit(e) {
    e.preventDefault();
    amendNft();
    setModal("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="ammendModalCopy" for="name">
        Name:
      </label>

      <input
        type="text"
        id="name"
        name="name"
        value={artWorkName}
        onChange={(e) => setArtWorkName(e.target.value)}
      />

      <label className="ammendModalCopy" for="price">
        Price:
      </label>

      <input
        type="text"
        id="price"
        name="price"
        value={artWorkPrice}
        onChange={(e) => setArtWorkPrice(e.target.value)}
      />

      <label className="ammendModalCopy" for="description">
        Decription:
      </label>

      <input
        type="text"
        id="description"
        name="description"
        value={artWorkDescription}
        onChange={(e) => setArtWorkDescription(e.target.value)}
      />

      <label className="ammendModalCopy" for="url">
        Artwork Url:
      </label>

      <input
        type="text"
        id="url"
        name="url"
        value={artWorkUrl}
        onChange={(e) => setArtWorkUrl(e.target.value)}
      />

      <input type="submit" value="Amend" className="adminAmendButton" />
    </form>
  );
}
