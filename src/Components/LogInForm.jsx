import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";
import "../Styles/FormStyling.css";

export default function LogInForm() {
  // using state to store email and password from the form which is used in the fetch to log people in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // setting / getting current user in zustand
  const setCurrentUser = useStore((store) => store.setCurrentUser);
  // const currentUser = useStore((store) => store.currentUser);
  // assigning a variable to useHistory to push
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API}/login`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log("userdata", userData);
        setCurrentUser(userData.user);
        localStorage.setItem("token", userData.token);
        console.log("saved token", localStorage.getItem("token"));
        // returning userData so have access to it in the next .then
        return userData.user;
      })
      .then((currentUser) => {
        // currentuser returning from previous .then
        console.log("currentuser from login", currentUser);
        return currentUser;
      })
      .then((currentUser) => {
        currentUser.role === "admin"
          ? history.push("/admin")
          : history.push("/");
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="logInForm">
        <h1 className="logInFormHeader">LOG IN FORM</h1>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginButton">
            Login
          </button>
        </div>
      </form>
      <Link to="/">
        <button className="takeMeHomeButton">Take me home</button>
      </Link>
    </div>
  );
}

// .then(
//   currentUser.role === "admin"
//     ? history.push("/admin")
//     : history.push("/")
// )
