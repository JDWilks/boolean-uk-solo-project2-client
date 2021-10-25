import React from "react";
import { Link } from "react-router-dom";

function trade() {
  return (
    <div>
      <h1>Trades go here</h1>
      <h2>Trade table with all trade info to go here</h2>
      <Link to="/admin">
        <button>Take Me Back To Admin</button>
      </Link>
    </div>
  );
}

export default trade;
