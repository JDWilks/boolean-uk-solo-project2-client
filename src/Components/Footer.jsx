import React from "react";
import { Link } from "react-router-dom";
import "../Styles/FooterStyling.css";

function footer() {
  return (
    <div className="footer">
      <p>Info on artist</p>

      <Link to="/nfts">
        <p className="infoNfts">Info on NFT's</p>
      </Link>

      <div>
        <img
          className="socialIcons"
          src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
          alt="instagram"
        />
        <img
          className="socialIcons"
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt="facebook"
        />
        <img
          className="socialIcons"
          src="https://img.icons8.com/color/48/000000/tiktok--v2.png"
          alt="tiktok"
        />
        <img
          className="socialIcons"
          src="https://img.icons8.com/color/48/000000/twitter--v2.png"
          alt="twitter"
        />
      </div>
    </div>
  );
}

export default footer;
