import React, { useEffect, useState } from "react";
import NftCard from "../Components/NftCard";
import { useStore } from "../Hooks/store";
import "../Styles/Bodystyling.css";

function Body({ allNfts }) {
  // using state so i can store the nft's from the fetch and useEffect to render immediately
  // const [allNfts, setAllNfts] = useState([]);
  // console.log("allNfts state", allNfts);

  // zustand ztate to replace the above local state

  const setAllNfts = useStore((store) => store.setAllNfts);

  // function to get all nfts
  function getAllNfts() {
    fetch("http://localhost:3030/nftArt")
      .then((res) => res.json())
      .then((fetchedNfts) => setAllNfts(fetchedNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  // use effect runs once when loading the page so all nft's are loaded immediately
  // timing of above depends on the urls for each bit of artwork

  // useEffect(() => {
  //   getAllNfts();

  //   // on rendering the page the below fetch runs
  //   // you can only get to trade if you have a token ?

  //   fetch("http://localhost:3030/trade", { credentials: "include" })
  //     .then((res) => res.json())
  //     .then((data) => console.log("data...", data));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allNfts]);

  // all nfts dependancy array - passed down as props
  // when allNfts changes this useEffect runs again

  console.log("allNfts state2", allNfts);

  return (
    <div className="body">
      <div className="nfts">
        {allNfts.map((nft) => (
          // props are added to the card component
          <NftCard
            id={nft.id}
            name={nft.name}
            price={nft.price}
            description={nft.description}
            url={nft.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
