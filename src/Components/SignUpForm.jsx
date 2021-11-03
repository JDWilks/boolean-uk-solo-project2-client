import React, { useState } from "react";
import { useStore } from "../Hooks/store";
import { useHistory } from "react-router-dom";
import "../Styles/FormStyling.css";

function SignUpForm() {
  // storing info from the form in state to use in the fetch
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // using zustand state to store the current user
  const setCurrentUser = useStore((store) => store.setCurrentUser);

  // assigning a variable to useHistory

  const history = useHistory();
  console.log("history is...", history);

  // handlesubmit runs after you have clicked the submit button - create user is triggered as well as useHistory to send users back to the home screen
  function handleSubmit(e) {
    e.preventDefault();
    createUser();
    history.push("/");
  }

  function createUser() {
    fetch(`${process.env.REACT_APP_BACKENDURL}/user`, {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send (firstName and lastName etc are taken directly from state)
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role: "user",
      }),
    })
      .then((res) => res.json())
      // setting current user in zustand state so can be used in any component
      .then((data) => {
        setCurrentUser({
          firstName: data.firstName,
          email: data.email,
          role: data.role,
          id: data.id,
          wallet: data.wallet,
        });

        console.log("setCurrentUser is...", setCurrentUser);
        console.log("id is...", data.id);
        console.log("firstName is...", firstName);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="signUpForm">
        <h1 className="signUpFormHeader">SIGN UP FORM</h1>
        <div>
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" value="Submit" className="signUpButton">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
