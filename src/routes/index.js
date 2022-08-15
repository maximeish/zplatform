import {
  ClerkProvider,
  SignedOut,
  SignedIn,
  RedirectToSignUp,
} from "@clerk/clerk-react";
import React from "react";
import LandingView from "../views/Landing";
import { CLERK_FRONTENDAPI_KEY } from "../constants";

const Home = () => {
  return (
    <ClerkProvider frontendApi={CLERK_FRONTENDAPI_KEY}>
      <SignedIn>
        <LandingView />
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </ClerkProvider>
  );
};

export default Home;
