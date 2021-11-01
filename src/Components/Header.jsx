import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";
import "../Styles/Headerstyling.css";

// header component for users

function Header() {
  const currentUser = useStore((store) => store.currentUser);

  // assigning a variable to useHistory

  const history = useHistory();
  console.log("history from header", history);

  // logging out a user - sending this request to the logout route in the backend
  // credentials include is the token i think

  function logUserOut() {
    history.push("/");
    fetch("http://localhost:3030/logout", {
      credentials: "include",
    });
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

      {/* {!currentUser.firstName ? (
        ""
      ) : (
        <button
          className="logOutButton"
          onClick={() => {
            logUserOut();
            console.log("logout button clicked");
          }}
        >
          Log Out{" "}
        </button>
      )}  */}
    </div>
  );
}

export default Header;

{
  /* <article className="header">
<div className="loginHeader">
  <p className="jdw__collect">JDW - Collect</p>
  <p className="blockchain">NFT ArtWork on the Ethereum blockchain </p>
  <p className="header__copy">Only one person can own the original !</p>
  <p
    className="loginHeaderButton"
    onClick={() => {
      setModal("LoginModal");
    }}
  >
    Hello &nbsp;
    {!currentUser.firstName ? "Please login" : currentUser.firstName}
  </p>
  <p
    className="logoutheader"
    onClick={() => {
      setCurrentUser({});
    }}
  >
    {currentUser.firstName ? "LogOut" : ""}
  </p>
</div>
</article> */
}
