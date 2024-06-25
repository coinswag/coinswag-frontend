"use client";
import { base } from "viem/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import React from "react";

function OnchainProviders({ children }: { children: React.ReactNode }) {
  return (
    <OnchainKitProvider apiKey="YOUR_PUBLIC_API_KEY" chain={base}>
      {/* <YourKit /> */}

      <div>{children}</div>
    </OnchainKitProvider>
  );
}

export default OnchainProviders;
