import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";

import "../Styles/AdminStyling.css";

function Footer() {
  const setCurrentUser = useStore((store) => store.setCurrentUser);
  // assigning a variable to useHistory
  const history = useHistory();

  function logUserOut() {
    fetch(`${process.env.REACT_APP_API}/logout`, {
      credentials: "include",
    })
      .then(setCurrentUser(""))
      .then(history.push("/"));
  }

  return (
    <div className="adminFooter">
      <button
        className="adminLogOutButton"
        onClick={() => {
          logUserOut();
          console.log("logout button clicked");
        }}
      >
        {" "}
        Log Out
      </button>
      <Link to="/">
        <button className="adminHomeButton">Home Page</button>
      </Link>
    </div>
  );
}

export default Footer;
