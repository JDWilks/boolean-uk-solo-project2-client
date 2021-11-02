import React, { useEffect, useState } from "react";
import { useStore } from "../Hooks/store";
import "../Styles/AdminNftModalStyling.css";

export default function AdminAmendNft() {
  //   const setModal = useStore((store) => store.setModal);
  const currentNft = useStore((store) => store.currentNft);
  const [artWorkName, setArtWorkName] = useState("");
  const [artWorkPrice, setArtWorkPrice] = useState("");
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artWorkUrl, setArtWorkUrl] = useState("");
  // const [artWorkUuId, setArtWorkUuId] = useState("");

  console.log("currentNft...", currentNft);

  // So you can have a useEffect in your component that runs setArtWorkUrl(currentNft.url), then you can switch your input to using the artWorkUrl for its value

  useEffect(() => {
    setArtWorkUrl(currentNft.url);
    setArtWorkName(currentNft.name);
    setArtWorkDescription(currentNft.description);
    setArtWorkPrice(currentNft.price);
  }, []);

  function amendNft() {
    fetch(`http://localhost:3030/nftArt/${currentNft.id}`, {
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
      // Displaying results to console
      .then((amendedNft) => console.log("amendedNft >>>", amendedNft))
      // .then((json) => console.log(json))
      .catch((error) => error);
  }

  function handleSubmit(e) {
    e.preventDefault();
    amendNft();
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
