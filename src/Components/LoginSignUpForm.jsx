import React from "react";
import "../Styles/FormStyling.css";

function LoginSignUpForm() {
  return (
    <div>
      <div className="logInForm">
        <label htmlfor="email">
          <b>Email</b>
        </label>
        <input type="email" placeholder="Enter email" name="email" required />

        <label htmlfor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
      </div>

      <div className="signUpForm">
        <label htmlfor="firstName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          required
        />

        <label htmlfor="lastName">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          required
        />

        <label htmlfor="email">
          <b>Email</b>
        </label>
        <input type="email" placeholder="Enter Email" name="email" required />

        <label htmlfor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />

        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginSignUpForm;
