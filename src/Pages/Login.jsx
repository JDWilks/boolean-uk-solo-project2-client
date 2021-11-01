import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SignUpForm from "../Components/SignUpForm";
import LogInForm from "../Components/LogInForm";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  console.log("log in history", history);

  return (
    <div className="mainPageWrapper">
      <Header />
      <SignUpForm />
      <LogInForm />
      <Footer />
    </div>
  );
}

export default Login;
