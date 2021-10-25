import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoginSignUpForm from "../Components/LoginSignUpForm";

function Login() {
  return (
    <div className="mainPageWrapper">
      <Header />
      <LoginSignUpForm />
      <Footer />
    </div>
  );
}

export default Login;
