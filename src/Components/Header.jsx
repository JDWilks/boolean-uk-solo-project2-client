import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>header info goes here</h1>
      <Link to="/login">
        <p>Log in / Sign up</p>
      </Link>
      <button>log out</button>
    </div>
  );
}

export default Header;
