"use client";
import { RedirectToSignIn, useUser } from '@clerk/nextjs'
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <RedirectToSignIn />;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello {user.username}, welcome to your profile!
    </div>
  );
};

export default ClientPage;