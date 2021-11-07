import React from "react";
import { Link } from "react-router-dom";
import "../Styles/FooterStyling.css";

function footer() {
  return (
    <div className="footer">
      <Link to="/nfts">
        <p className="infoNfts">Info on NFT's</p>
      </Link>

      <div>
        <Link to="//www.instagram.com/jonathondwilks/" target="_blank">
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
            alt="instagram"
          />
        </Link>

        <Link to="//www.facebook.com/jonathon.wilks" target="_blank">
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="facebook"
          />
        </Link>

        <Link to="//www.twitter.com/BubbaJdw" target="_blank">
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/twitter--v2.png"
            alt="twitter"
          />
        </Link>

        <Link to="//www.github.com/JDWilks" target="_blank">
          <img
            className="socialIcons"
            src="https://img.icons8.com/color-glass/48/000000/github.png"
            alt="github"
          />
        </Link>
        <Link to="//www.linkedin.com/in/jonathon-david-wilks" target="_blank">
          <img
            className="socialIcons"
            src="https://img.icons8.com/color-glass/48/000000/linkedin.png"
            alt="LinkedIn"
          />
        </Link>
      </div>
    </div>
  );
}

export default footer;
