import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginView = () => {
  return (
    <>
      <Header
        heading="Log in to your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />

      <Login />
    </>
  );
};

export default LoginView;
