import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";
import "../Styles/Headerstyling.css";

// header component for users

function Header() {
  // zustand state for current user

  const currentUser = useStore((store) => store.currentUser);
  const setCurrentUser = useStore((store) => store.setCurrentUser);

  // assigning a variable to useHistory

  const history = useHistory();
  console.log("history from header", history);

  // logging out a user - sending this request to the logout route in the backend
  // credentials include is the cookie
  // we then set the current user to empty to their name disapears from the top of the page
  // we send them to the home page if they logged out from another

  function logUserOut() {
    fetch("http://localhost:3030/logout", {
      credentials: "include",
    })
      .then(setCurrentUser(""))
      .then(history.push("/"));
  }

  return (
    <div className="loginHeader">
      <Link to="/">
        <p className="jdw__collect">JDW :: Collect</p>
      </Link>

      <p className="blockchain">NFT ArtWork on the Ethereum blockchain </p>
      <p className="header__copy">Only one person can own the original !</p>
      {/* the below checks if there is a current user - if yes its says their name, if no log in is presented */}
      <p className="login">
        Hello &nbsp;
        {!currentUser.firstName ? (
          <Link className="logInLink" to="/login">
            Please Log in or Sign up
          </Link>
        ) : (
          currentUser.firstName
        )}
      </p>
      {/* the below checks if there is a current user - if yes logout buttin is displayed, if no logout isnt presented */}

      <p className="logout">
        {!currentUser.firstName ? (
          ""
        ) : (
          <p
            onClick={() => {
              logUserOut();
              console.log("logout button clicked");
            }}
          >
            LogOut
          </p>
        )}
      </p>
    </div>
  );
}

export default Header;
