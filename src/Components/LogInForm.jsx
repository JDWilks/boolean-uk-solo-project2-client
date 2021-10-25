import React from "react";

export default function LogInForm() {
  return (
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
  );
}
