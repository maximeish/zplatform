import {
  ClerkProvider,
  SignedOut,
  SignedIn,
  RedirectToSignUp,
} from "@clerk/clerk-react";
import React from "react";
import env from "react-dotenv";
import LandingView from "../views/Landing";
import { CLERK_FRONTEND_API } from "../constants";

function Home() {
  //   const frontendApi = env.FRONTENDAPI_KEY;
  //   console.log("........api", frontendApi);
  return (
    <ClerkProvider frontendApi={CLERK_FRONTEND_API}>
      <SignedIn>
        <LandingView />
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </ClerkProvider>
  );
}

export default Home;
