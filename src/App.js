import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Trade from "./Pages/Trade";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import { ModalContainer } from "./Components/ModalContainer";

function App() {
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
      </Switch>
      <ModalContainer />
    </>
  );
}

export default App;
