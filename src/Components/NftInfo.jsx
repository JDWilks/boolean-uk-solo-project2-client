import React from "react";
import "../Styles/NftInfoStyling.css";

function NftInfo() {
  return (
    <article className="videoContainer">
      <div className="nftVideo">
        <iframe
          width="960"
          height="715"
          src="https://www.youtube.com/embed/WOxYlBTRncY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </article>
  );
}

export default NftInfo;
