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
import PurchasedPage from "./Pages/PurchasedPage";

// this is app from index.js - all the routes are defined here

function App() {
  const setCurrentUser = useStore((store) => store.setCurrentUser);
  const allNfts = useStore((store) => store.allNfts);
  const setAllNfts = useStore((store) => store.setAllNfts);
  //using zustand store to set the appropriate modal
  const setModal = useStore((store) => store.setModal);

  // runs once on render so it sets the current user so we can use this to greet the user (basically so if you refresh the page the user is not logged out)
  console.log("process thing...", process.env.REACT_APP_API);
  useEffect(() => {
    // fetching to the /cookie route and sending the cookie(credentials) - this is in Auth in the backend
    // check out the notes in the backend auth controller for explanation
    fetch(`${process.env.REACT_APP_API}/cookie`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        return data;
      });

    console.log("from app js");
    fetch(`${process.env.REACT_APP_API}/nftArt`)
      .then((res) => res.json())
      .then((fetchedNfts) => setAllNfts(fetchedNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }, [setAllNfts, setCurrentUser]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main allNfts={allNfts} />
        </Route>
        <Route path="/trade" exact>
          <Trade />
        </Route>
        <Route path="/admin" exact>
          <Admin allNfts={allNfts} />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/nfts" exact>
          <Nfts />
        </Route>
        <Route path="/purchased" exact>
          <PurchasedPage />
        </Route>
      </Switch>
      <ModalContainer />
    </>
  );
}

export default App;
