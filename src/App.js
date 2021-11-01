import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Trade from "./Pages/Trade";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import { ModalContainer } from "./Components/ModalContainer";
import Nfts from "./Pages/Nfts";
import { useEffect } from "react";
import { useStore } from "./Hooks/store";

// this is app from index.js - all the routes are defined here

function App() {
  const setCurrentUser = useStore((store) => store.setCurrentUser);

  // runs once on render so it sets the current user so we can use this to greet the user (basically so if you refresh the page the user is not logged out)
  useEffect(() => {
    // fetching to the /cookie route and sending the cookie(credentials) - this is in Auth in the backend
    // check out the notes in the backend auth controller for explanation
    fetch("http://localhost:3030/cookie", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/trade" exact>
          <Trade />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/nfts" exact>
          <Nfts />
        </Route>
      </Switch>
      <ModalContainer />
    </>
  );
}

export default App;
