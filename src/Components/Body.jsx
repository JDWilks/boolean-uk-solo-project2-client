import React, { useEffect, useState } from "react";
import NftCard from "../Components/NftCard";
import { useStore } from "../Hooks/store";
import "../Styles/Bodystyling.css";

function Body() {
  // zustand ztate to replace the above local state
  const allNfts = useStore((store) => store.allNfts);
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
