import { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./wagmi";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={
            "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIH7LRxNGMPeo6pJmeDd84RBatzP+3MpMPf3za+2ZiPpwoAoGCCqGSM49\nAwEHoUQDQgAEhaW5rVgk0iQy8nCGbyNyOjivKtstcibf97R38B55Trt8EuhciIjS\nzT07Rdw4XlWgntXro/qubTqDPwPrY37wFA==\n-----END EC PRIVATE KEY-----\n"
          }
          chain={base}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
