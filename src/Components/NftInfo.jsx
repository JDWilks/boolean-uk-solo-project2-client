import React from "react";
import "../Styles/NftInfoStyling.css";

function NftInfo() {
  return (
    <div className="nftVideo">
      {/* <div className="video"> */}
      <iframe
        width="960"
        height="715"
        src="https://www.youtube.com/embed/WOxYlBTRncY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* </div> */}
    </div>
  );
}

export default NftInfo;
