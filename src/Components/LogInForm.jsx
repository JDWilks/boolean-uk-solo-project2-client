import React from "react";
import { Link } from "react-router-dom";

export default function LogInForm() {
  return (
    <div>
      <form>
        <div className="logInForm">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="email" placeholder="Enter email" name="email" required />

          <label htmlFor="psw">
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
      </form>
      {/* <Link to="/">
        <button>Take me home</button>
      </Link> */}
    </div>
  );
}
